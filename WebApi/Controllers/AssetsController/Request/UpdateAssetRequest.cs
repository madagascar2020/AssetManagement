using System;

namespace WebApi.Controllers.AssetsController.Request
{
    public class UpdateAssetRequest
    {
        public int AssetID { get;  set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public int? Quantity { get; set; }
        public DateTime? purchaseDate { get; set; }
        public decimal? Value { get; set; }
        public string Tag { get; set; }
        public int? AssetTypeID { get; set; }
    }
}
