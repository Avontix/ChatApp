using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApplicationServer.Entities
{
    [Table("Register")]
    public class Register 
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string MobileNumber { get; set; }
        public DateTime? AddedAt { get; set; }
    }
}
