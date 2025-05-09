using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;

namespace charmingspell_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
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

        public class EmailRequest(string firstName, string lastName, string email, string message)
        {
            public required string FirstName { get; init; } = firstName;
            public required string LastName { get; init; } = lastName;
            public required string Email { get; init; } = email;
            public required string Message { get; init; } = message;
        }
    }
}
