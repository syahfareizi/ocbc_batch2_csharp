using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewMovieAPI.Models
{
    public class MovieItem
    {
        public int id { get; set; }
        public string nama { get; set; }
        public string genre { get; set; }
        public string duration { get; set; }
        public DateTime releasedate { get; set; }

    }
}
