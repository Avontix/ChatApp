using ChatApplicationServer.Entities;
using ChatApplicationServer.Models;
using ChatApplicationServer.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BC = BCrypt.Net.BCrypt;

namespace ChatApplicationServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly IRegisterService _registerService;
        public RegisterController(IRegisterService registerService)
        {
            _registerService = registerService;
        }
        [HttpGet]
        public IActionResult GetUser(string name, string password)
        {
            var result = _registerService.GetUser(name, password);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok();
        }
        [HttpPost]
        public IActionResult Post(Register register)
        {
            register.AddedAt = DateTime.Now;
            register.Password = BC.HashPassword(register.Password);
            _registerService.AddUser(register);
            return Ok();
        }
        [HttpPut]
        public IActionResult Put()
        {
            return Ok();
        }

    }
}
