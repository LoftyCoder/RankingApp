using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<itemModel> Items = new[]
        {
            new itemModel{ID =1, Title = "Apex Legends", ImageId=1, Ranking=0,ItemType=1 },
            new itemModel{ID =2, Title = "Need for Speed Heat", ImageId=2, Ranking=0,ItemType=1 },
            new itemModel{ID =3, Title = "Xenoblade Chronicles", ImageId=3, Ranking=0,ItemType=1 },
            new itemModel{ID =4, Title = "Xenoblade Chronicles 2", ImageId=4, Ranking=0,ItemType=1 },
            new itemModel{ID =5, Title = "Xenoblade Chronicles X", ImageId=5, Ranking=0,ItemType=1 },
            new itemModel{ID =6, Title = "Super Smash Bros. Ultimate", ImageId=6, Ranking=0,ItemType=1 },

        };

        [HttpGet("{itemType:int}")]
        public itemModel[] Get(int itemType)
        {
            itemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            return items;
        }
    }
}