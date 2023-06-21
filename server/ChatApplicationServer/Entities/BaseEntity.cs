namespace ChatApplicationServer.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public DateTime AddedAt { get; set; }
        public DateTime? ModifiedAt { get; set;}
        public Guid? CreatedBy { get; set; }
        public Guid? ModifiedBy { get; set; }
    }
}
