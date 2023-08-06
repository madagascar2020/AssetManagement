using Domain.Aggregates.Asset.Input;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Aggregates.Asset
{
    public class Asset
    {
        #region Properties
        public int AssetID { get;private set; }
        public string Code { get; private set; }
        public string Description { get; private set; }
        public int? Quantity { get; private set; }
        public DateTime? purchaseDate { get; private set; }
        public decimal? Value { get; private set; }
        public string Tag { get; private set; }
        public int? AssetTypeID { get;private set; }

        #endregion

        #region Methods

        public  void CreateAsset(CreateAssetInput input)
        {
            #region Validation

            #endregion
            // this.AssetID = input.AssetID; ** need to change identity insert


            this.Code = input.Code; 
            this.Description = input.Description;
            this.Quantity = input.Quantity;
            this.purchaseDate = input.purchaseDate;
            this.Value = input.Value;
            this.Tag = input.Tag;
            this.AssetTypeID = input.AssetTypeID;
        }

        public void UpdateAssetDetails(UpdateAssetInput input)
        {
            this.Code = input.Code;
            this.Description = input.Description;
            this.Quantity = input.Quantity;
            this.purchaseDate = input.purchaseDate;
            this.Value = input.Value;
            this.Tag = input.Tag;
            this.AssetTypeID = input.AssetTypeID;
        }

        #endregion
    }
}
