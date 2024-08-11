using Library_System.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library_System.Services
{
    public interface ILibraryService
    {
        Task<List<LibraryBook>> GetAllLibraryBooks();
        Task<LibraryBook> GetLibraryBook(int libraryBookId);
        Task<LibraryBook> CreateLibraryBook(LibraryBook book);
        Task<LibraryBook> UpdateLibraryBook(int id, LibraryBook book);
        Task DeleteLibraryBook(int libraryBookId);
    }
}
