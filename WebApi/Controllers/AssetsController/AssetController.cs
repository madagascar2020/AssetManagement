using Domain.Aggregates.Asset;
using Domain.Aggregates.Asset.Input;
using Domain.Shared.Models;
using Infrastructure.UOW;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Update.Internal;
using System.Collections.Generic;
using System.Linq;
using WebApi.Controllers.AssetsController.Converter;
using WebApi.Controllers.AssetsController.Request;
using WebApi.Controllers.AssetsController.Response;

namespace WebApi.Controllers.AssetsController
{
    [ApiController]
    [Route("Asset")]
    public class AssetController : ControllerBase
    {
        public AssetManagementUOW UOW { get; }

        public AssetController(AssetManagementUOW uOW)
        {
            UOW = uOW;
        }

        #region Query
        [HttpPost("GetAssets")]
        public ActionResult<IEnumerable<AssetDataResponse>> GetAssets(SearchFilter filter)
        {
            var results = UOW.AssetRepository.GetFilteredAssets(filter).Select(a => new AssetDataResponse
            {
                AssetID = a.AssetID,
                AssetCode = a.Code,
                AssetDescription = a.Description,
                AssetPurchaseDate = a.purchaseDate,
                AssetQuantity = a.Quantity,
                AssetTag = a.Tag,
                AssetValue = a.Value
            }).ToList();

            return Ok( results);
        }

        #endregion

        #region Command
        [HttpPost("CreateNewAsset")]
        public ActionResult<int> CreateNewAsset(CreateNewAssetRequest request)
        {
            var newAsset = new Asset();
            var input = request.ToCreateAssetInput(UOW.AssetRepository.GetAssetNewId);
            newAsset.CreateAsset(input);
            UOW.AssetRepository.Add(newAsset);
            UOW.SaveChanges();
            return Ok(newAsset.AssetID);
        }

        [HttpPost("UpdateAssetDetails")]
        public ActionResult<bool> UpdateAssetDetails(UpdateAssetRequest request)
        {
            var asset = UOW.AssetRepository.Find(request.AssetID);
            if (asset != null && asset.AssetID > 0)
            {
                var input = request.ToUpdateAssetInput();
                asset.UpdateAssetDetails(input);
                var res =   UOW.SaveChanges();
                return Ok(res > 0 ? true : false );
            }
            else
            {
                return Ok(false);
            }
        }

        #endregion


    }
}
