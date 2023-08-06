using Infrastructure.Database.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Database.Repositories
{
    public abstract class BaseRepository
    {
        protected AssetManagementContext Context { get;  }

        public BaseRepository(AssetManagementContext context)
        {
            Context = context;
        }
    }
}
