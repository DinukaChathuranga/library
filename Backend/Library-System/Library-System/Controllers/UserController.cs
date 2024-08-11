using Library_System.Models;
using Library_System.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Library_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            var createdUser = await _userService.RegisterUserAsync(user);
            return Ok(createdUser);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromQuery] string email, [FromQuery] string password)
        {
            var user = await _userService.LoginUserAsync(email, password);

            if (user == null)
            {
                return Unauthorized("Invalid login attempt.");
            }

            return Ok(user);
        }
    }
}
