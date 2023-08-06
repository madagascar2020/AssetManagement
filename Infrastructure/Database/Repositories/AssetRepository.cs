using Domain.Aggregates.Asset;
using Domain.Shared.Models;
using Infrastructure.Database.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Database.Repositories
{
    public class AssetRepository : BaseRepository
    {
        public AssetRepository(AssetManagementContext _context)
            : base(_context)
        {

        }

        #region Query
        public int GetAssetNewId()
        {
            return Context.Assets.Max(s => s.AssetID) + 1;
        }

        public List<Asset> GetFilteredAssets(SearchFilter filter) 
        {
            var query = this.Context.Assets.AsQueryable();

            if (!string.IsNullOrEmpty(filter.SearchText))
            { 
                query = query.Where(s => s.Description == filter.SearchText);
            }

            int take = 0, skip = 0;
            take = filter.PageSize;

            if (filter.PageIndex <= 0)
            {
                skip = 0;
            }
            else
            {
                skip = filter.PageIndex * filter.PageSize;
            }
            return query.OrderByDescending(s => s.AssetID).Skip(skip).Take(take).ToList();
        }
        public List<Asset> GetTopTenAssets()
        {
           return this.Context.Assets.OrderByDescending(p => p.AssetID).Take(10).ToList();

        }
        
        public Asset Find(int id)
        {
            return Context.Assets.FirstOrDefault(s => s.AssetID == id);
        }
        
        #endregion

        #region Command

        public void Add(Asset asset)
        {
            this.Context.Assets.Add(asset);
        }

        #endregion
    }
}
