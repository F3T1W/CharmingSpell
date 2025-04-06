using Microsoft.AspNetCore.Mvc;
using sib_api_v3_sdk.Api;
using sib_api_v3_sdk.Client;
using sib_api_v3_sdk.Model;

namespace charmingspell_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController(IConfiguration configuration) : ControllerBase
    {
        private readonly IConfiguration _configuration = configuration;

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { Message = "Hello from ASP.NET!" });
        }
        
        [HttpPost("send-email")]
        public IActionResult SendEmail([FromBody] EmailRequest request)
        {
            try
            {
                Configuration.Default.ApiKey["api-key"] = _configuration["BrevoAPI:APIKey"];

                var apiInstance = new TransactionalEmailsApi();

                var sendSmtpEmail = new SendSmtpEmail(
                    sender: new SendSmtpEmailSender(name: "User", email: "particular0010abyss@gmail.com"),
                    to: [new SendSmtpEmailTo(email: "particular0010abyss@gmail.com", "Admin")],
                    subject: "Feedback",
                    htmlContent: $"<h1>Hello, Feedback from {request.FirstName} {request.LastName} {request.Email}" +
                                 $"!</h1><p>{request.Message}</p>"
                );

                var result = apiInstance.SendTransacEmail(sendSmtpEmail);

                return Ok(new { message = "Email sent successfully!", details = result });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Failed to send email.", details = ex.Message });
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
