using Infrastructure.Database.Context;
using Infrastructure.Database.Repositories;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.UOW
{
    public class AssetManagementUOW
    {
        private readonly AssetManagementContext Context;
        private readonly IConfiguration _Configuration;

        public AssetRepository AssetRepository { get; set; }


        public AssetManagementUOW(AssetManagementContext _Context, IConfiguration configuration)
        {
            this.Context = _Context;
            this._Configuration = configuration;
            this.AssetRepository = new AssetRepository(_Context);

        }

        public int SaveChanges()
        {
          return  this.Context.SaveChanges();
        }
    }
}
