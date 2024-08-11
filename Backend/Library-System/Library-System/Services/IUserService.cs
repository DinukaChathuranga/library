using Library_System.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library_System.Services
{
    public interface IUserService
    {
        Task<User> RegisterUserAsync(User user);
        Task<User> LoginUserAsync(string email, string password);
    }
}
