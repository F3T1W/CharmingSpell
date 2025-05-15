using System.Net;
using System.Net.Mail;
using charmingspell_server.Extensions;
using charmingspell_server.Models;
using charmingspell_server.Services;
using charmingspell_server.Utility;
using Microsoft.AspNetCore.Mvc;

namespace charmingspell_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController(ApplicationDbContext context, EmailService emailService) : ControllerBase
    {
        private const string SmtpHost = "smtp.gmail.com";
        private const int SmtpPort = 587;
        
        private readonly string? _smtpUsername = Environment.GetEnvironmentVariable("SMTP_USERNAME");
        private readonly string? _smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD");

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { Message = "Hello from ASP.NET!" });
        }

        [HttpGet("verify")]
        public IActionResult VerifyAccount(string token)
        {
            var user = context.Users.FirstOrDefault(u => u.VerificationToken == token);
            if (user == null)
                return BadRequest("Неверный токен.");
            user.IsVerified = true;
            user.VerificationToken = null;
            context.SaveChanges();
            return Ok("Аккаунт успешно подтвержден!");
        }

        [HttpPost("send-email")]
        public void SendEmail([FromBody] EmailRequest request)
        {
            try
            {
                var mail = new MailMessage();
                if (_smtpUsername == null) return;
                mail.From = new MailAddress(_smtpUsername);
                mail.To.Add(_smtpUsername);
                mail.Subject = "Feedback";
                mail.Body = $"<h1>Hello, Feedback from {request.FirstName} {request.LastName} ({request.Email})" +
                            $"!</h1><p>{request.Message}</p>";
                mail.IsBodyHtml = true;

                var smtpClient = new SmtpClient(SmtpHost)
                {
                    Port = SmtpPort,
                    Credentials = new NetworkCredential(_smtpUsername, _smtpPassword),
                    EnableSsl = true
                };

                smtpClient.Send(mail);
                    
                Console.WriteLine("Письмо успешно отправлено!");
            }
            catch (Exception)
            {
                throw new Exception();
            }
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterModel model)
        {
            if (model.Password != model.ConfirmPassword)
                return BadRequest("Пароли не совпадают.");

            if (context.Users.Any(u => u.Email == model.Email))
                return BadRequest("Пользователь с таким email уже существует.");

            var passwordHash = model.Password.HashPassword();
            var verificationToken = StaticMethods.GenerateVerificationToken();

            var user = new User
            {
                Email = model.Email,
                PasswordHash = passwordHash,
                VerificationToken = verificationToken,
                IsVerified = false
            };

            context.Users.Add(user);
            context.SaveChanges();

            SendVerification.SendVerificationEmail(emailService, model.Email, verificationToken);

            return Ok("Письмо с подтверждением отправлено на ваш email.");
        }

        public class EmailRequest(string firstName, string lastName, string email, string message)
        {
            public required string FirstName { get; init; } = firstName;
            public required string LastName { get; init; } = lastName;
            public required string Email { get; init; } = email;
            public required string Message { get; init; } = message;
        }
    }
}
