using Library_System.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library_System.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserByEmailAsync(string email);
        Task<User> CreateUserAsync(User user);

    }
}
