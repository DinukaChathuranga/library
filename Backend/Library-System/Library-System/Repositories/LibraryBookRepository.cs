using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library_System.Data;
using Library_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Library_System.Repositories
{
    public class LibraryBookRepository : ILibraryBookRepository
    {
        private readonly LibraryContext _dbContext;

        public LibraryBookRepository(LibraryContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<LibraryBook>> GetAllAsync()
        {
            return await _dbContext.Books.ToListAsync();
        }

        public async Task<LibraryBook> GetByIdAsync(int id)
        {
            return await _dbContext.Books.FindAsync(id);
        }

 
        public async Task<LibraryBook> CreateAsync(LibraryBook book)
        {
            await _dbContext.Books.AddAsync(book);
            await _dbContext.SaveChangesAsync();
            return book;
        }

        public async Task<LibraryBook> UpdateAsync(int id, LibraryBook book)
        {
            var existingBook = await _dbContext.Books.FindAsync(id);

            if (existingBook == null)
            {
                throw new Exception("Book not found");
            }

            existingBook.Name = book.Name;
            existingBook.Author = book.Author;
            existingBook.Description = book.Description;
            existingBook.Imageurl = book.Imageurl;
            existingBook.Publisher = book.Publisher;
            existingBook.Edition = book.Edition;
            existingBook.Type = book.Type;
 

            await _dbContext.SaveChangesAsync();

            return existingBook;
        }

        public async Task DeleteAsync(int libraryBookId)
        {
            var book = await _dbContext.Books.FindAsync(libraryBookId);

            if (book == null)
            {
                throw new Exception("Book not found");
            }

            _dbContext.Books.Remove(book);
            await _dbContext.SaveChangesAsync();
        }
    }
}
