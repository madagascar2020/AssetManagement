using Domain.Aggregates.Asset.Input;
using System;
using WebApi.Controllers.AssetsController.Request;

namespace WebApi.Controllers.AssetsController.Converter
{
    public static class AssetsConverter
    {
        public static CreateAssetInput ToCreateAssetInput(this CreateNewAssetRequest _input , Func<int> GetAssetNewId)
        {
            var result = new CreateAssetInput
            {
                AssetID = GetAssetNewId(),
                Code = _input.Code,
                Description = _input.Description,
                purchaseDate = Convert.ToDateTime(_input.purchaseDate),
                Quantity = _input.Quantity,
                Tag = _input.Tag,
                Value = _input.Value,
                AssetTypeID = _input.AssetTypeID,
            };

            return  result ;
        }


        public static UpdateAssetInput ToUpdateAssetInput(this UpdateAssetRequest _input)
        {
            return new UpdateAssetInput
            {
                Code = _input.Code,
                AssetTypeID = _input.AssetTypeID,
                Description = _input.Description,
                purchaseDate = _input.purchaseDate,
                Quantity = _input.Quantity,
                Tag = _input.Tag ,
                Value = _input.Value
            };
        }
    }
}
