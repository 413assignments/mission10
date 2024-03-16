using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission10.Models;
using System.Linq;

namespace mission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private IBowlerRepository _BowlerRepository;

        public BowlersController(IBowlerRepository temp) { 
            _BowlerRepository = temp;           
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            string[] FilteredTeams = ["Marlins", "Sharks"];

            return _BowlerRepository.Bowlers
            .Join(
                _BowlerRepository.Teams, 
                bowler => bowler.TeamID,
                team => team.TeamID,
                (bowler, team) => bowler
            )
            .Where(b => FilteredTeams.Contains(b.Team.TeamName))
            .ToArray();
        }
    }
}
