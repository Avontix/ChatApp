using ChatApplicationServer.Context;
using ChatApplicationServer.Entities;
using ChatApplicationServer.Models;
using System.Text;
using BC = BCrypt.Net.BCrypt;

namespace ChatApplicationServer.Services
{
    public interface IRegisterService
    {
        void AddUser(Register register);
        Register GetUser(string name, string password);
    }
    public class RegisterService : IRegisterService
    {
        public ChatContext _chatContext { get; set; }
        public RegisterService(ChatContext chatContext)
        {
            _chatContext = chatContext;
        }
        public void AddUser(Register register)
        {
            try
            {
                _chatContext.Add(register);
                _chatContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(ex.Message);
            }

        }
        public Register GetUser(string name, string password)
        {
            try
            {
                var user = _chatContext.Register.Single(x => x.Name == name);
                if (user != null && BC.Verify(password, user.Password))
                {
                    return user;
                }
                return user;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(ex.Message);
            }
        }
    }
}
