using System;
using System.ComponentModel.DataAnnotations;

namespace Library_System.Models
{
    public class LibraryBook
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public string Author { get; set; }
        public string Description { get; set; }

        public string Imageurl { get; set; }

        public DateTime AddedDate { get; set; }

        public int Edition { get; set; }

        [StringLength(255)]
        public string Publisher { get; set; }


        [Required]
        public BookType Type { get; set; }    // Navigation Property

    }
}

