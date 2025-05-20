using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Text;
using charmingspell_server.Extensions;
using charmingspell_server.Models;
using charmingspell_server.Services;
using charmingspell_server.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace charmingspell_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController(ApplicationDbContext context, EmailService emailService,
        IConfiguration configuration) : ControllerBase
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

        [HttpGet("verify/{token}")]
        public IActionResult VerifyAccount(string token)
        {
            Console.WriteLine($"Received token: {token}");
            if (string.IsNullOrEmpty(token))
                return BadRequest(new { message = "Токен не передан." });

            var user = context.Users.FirstOrDefault(u => u.VerificationToken == token);
            if (user == null)
                return BadRequest(new { message = "Неверный токен." });

            user.IsVerified = true;
            user.VerificationToken = null;
            context.SaveChanges();
            return Ok(new { message = "Аккаунт успешно подтвержден!" });
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
                return BadRequest(new { message = "Пароли не совпадают." });

            if (context.Users.Any(u => u.Email == model.Email))
                return BadRequest(new { message = "Пользователь с таким email уже существует." });

            var passwordHash = BCrypt.Net.BCrypt.HashPassword(model.Password);
            var verificationToken = StaticMethods.GenerateVerificationToken();

            var user = new User
            {
                Email = model.Email,
                PasswordHash = passwordHash,
                VerificationToken = verificationToken,
                IsVerified = false,
                Role = "User"
            };

            context.Users.Add(user);
            try
            {
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Ошибка сохранения: {ex.Message}");
                return StatusCode(500, new { message = "Ошибка сервера при сохранении пользователя." });
            }

            try
            {
                SendVerification.SendVerificationEmail(emailService, model.Email, verificationToken);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Ошибка отправки письма: {ex.Message}");
                return StatusCode(500, new { message = "Пользователь зарегистрирован, но письмо не отправлено." });
            }

            return Ok(new { message = "Письмо с подтверждением отправлено на ваш email." });
        }
        
        [HttpPost("auth/login")]
        public IActionResult Login([FromBody] LoginModel model)
        {
            var user = context.Users.FirstOrDefault(u => u.Email == model.Email);
            if (user == null)
                return BadRequest(new { message = "Пользователь не найден." });

            if (!user.IsVerified)
                return BadRequest(new { message = "Аккаунт не подтвержден." });

            if (!model.Password.VerifyPassword(user.PasswordHash))
                return BadRequest(new { message = "Неверный пароль." });

            var token = GenerateJwtToken(user);

            return Ok(new
            {
                token,
                user = new
                {
                    id = user.Id,
                    email = user.Email,
                    role = user.Role
                }
            });
        }
        
        [Authorize]
        [HttpGet("auth/me")]
        public IActionResult GetCurrentUser()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? string.Empty);
            var user = context.Users.FirstOrDefault(u => u.Id == userId);
            if (user == null)
                return NotFound(new { message = "Пользователь не найден." });

            return Ok(new
            {
                id = user.Id,
                email = user.Email,
                role = user.Role
            });
        }
        
        private string GenerateJwtToken(User user)
        {
            var jwtSettings = configuration.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(int.Parse(jwtSettings["ExpiresInMinutes"]!)),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public class EmailRequest(string firstName, string lastName, string email, string message)
        {
            public required string FirstName { get; init; } = firstName;
            public required string LastName { get; init; } = lastName;
            public required string Email { get; init; } = email;
            public required string Message { get; init; } = message;
        }
        
        public class LoginModel
        {
            public string Email { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
        }
    }
}