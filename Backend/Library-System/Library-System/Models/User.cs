namespace Library_System.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Isactive { get; set; }
        public object Id { get; internal set; }


        public string Token { get; set; }
    }
}
