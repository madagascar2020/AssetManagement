using System;

namespace WebApi.Controllers.AssetsController.Response
{
    public class AssetDataResponse
    {
        public int AssetID { get;  set; }
        public string AssetCode { get;  set; }
        public string AssetDescription { get;  set; }
        public int? AssetQuantity { get;  set; }
        public DateTime? AssetPurchaseDate { get;  set; }
        public decimal? AssetValue { get;  set; }
        public string AssetTag { get;  set; }
    }
}
