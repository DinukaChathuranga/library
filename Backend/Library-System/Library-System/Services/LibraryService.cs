using Library_System.Models;
using Library_System.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library_System.Services
{
    public class LibraryService : ILibraryService
    {
        private readonly ILibraryBookRepository _libraryBookRepository;

        public LibraryService(ILibraryBookRepository libraryBookRepository)
        {
            _libraryBookRepository = libraryBookRepository;
        }

        public Task<List<LibraryBook>> GetAllLibraryBooks()
        {
            return _libraryBookRepository.GetAllAsync();
        }

        public Task<LibraryBook> CreateLibraryBook(LibraryBook book)
        {
            return _libraryBookRepository.CreateAsync(book);
        }

        public Task<LibraryBook> UpdateLibraryBook(int id, LibraryBook book)
        {
            return _libraryBookRepository.UpdateAsync(id, book);
        }

        public Task DeleteLibraryBook(int libraryBookId)
        {
            return _libraryBookRepository.DeleteAsync(libraryBookId);
        }

        public Task<LibraryBook> GetLibraryBook(int libraryBookId)
        {
            return _libraryBookRepository.GetByIdAsync(libraryBookId);
        }
    }
}
