using charmingspell_server;
using charmingspell_server.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddSingleton<EmailService>(provider =>
{
    var smtpHost = Environment.GetEnvironmentVariable("SMTP_HOST") ?? "smtp.gmail.com";
    var smtpPort = int.Parse(Environment.GetEnvironmentVariable("SMTP_PORT") ?? "587");
    var smtpUsername = Environment.GetEnvironmentVariable("SMTP_USERNAME");
    var smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD");

    return new EmailService(smtpHost, smtpPort, smtpUsername, smtpPassword);
});

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration[builder.Configuration["ConnectionStrings:DefaultConnection"]!]));

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowReactApp");
app.MapControllers();

app.Run();