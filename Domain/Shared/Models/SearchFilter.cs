using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Shared.Models
{
    public class SearchFilter
    {
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public string SearchText { get; set; }
    }
}
