using Library_System.Data;
using Library_System.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library_System.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly LibraryContext _dbContext;

        public UserRepository(LibraryContext dbContext)
        {
            _dbContext = dbContext;
        }


        public async Task<User> GetUserByEmailAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task<User> CreateUserAsync(User user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return user;
        }


    }
}
