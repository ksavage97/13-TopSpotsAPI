using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TopSpotsAPI.Models;
using System.IO;
using Newtonsoft.Json;

namespace TopSpotsAPI.Controllers
{
    public class TopSpotsController : ApiController
    {
        //GET /api/topspots
        public IEnumerable<TopSpots> Get()
        {
           TopSpots[] TopSpot = JsonConvert.DeserializeObject<TopSpots[]>(File.ReadAllText(@"C:\Dev\13-TopSpotsAPI\app\data\topspots.json"));
            return TopSpot;
        }
    }
}
