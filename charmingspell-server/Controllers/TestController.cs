using Microsoft.AspNetCore.Mvc;

namespace charmingspell_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { Message = "Hello from ASP.NET!" });
        }
    }
}
