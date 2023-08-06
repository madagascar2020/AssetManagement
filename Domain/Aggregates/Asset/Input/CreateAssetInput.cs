using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Aggregates.Asset.Input
{
    public class CreateAssetInput
    {
        public int AssetID { get;  set; }
        public string Code { get;  set; }
        public string Description { get;  set; }
        public int? Quantity { get;  set; }
        public DateTime? purchaseDate { get;  set; }
        public decimal? Value { get;  set; }
        public string Tag { get;  set; }
        public int? AssetTypeID { get;  set; }

    }
}
