using ChatApplicationServer.Entities;
using Microsoft.EntityFrameworkCore;

namespace ChatApplicationServer.Context
{
    public class ChatContext : DbContext
    {
        public ChatContext(DbContextOptions<ChatContext> options) : base(options)
        {

        }
        public DbSet<Register> Register { get; set; }
    }
}
