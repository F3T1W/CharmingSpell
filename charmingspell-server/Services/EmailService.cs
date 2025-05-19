using System.Net;
using System.Net.Mail;

namespace charmingspell_server.Services;

public class EmailService(string smtpHost, int smtpPort, string? smtpUsername, string? smtpPassword)
{
    public void SendEmail(string? to, string subject, string body)
    {
        if (string.IsNullOrEmpty(smtpUsername) || string.IsNullOrEmpty(smtpPassword))
        {
            Console.WriteLine("SMTP_USERNAME или SMTP_PASSWORD не установлены.");
            return;
        }

        var mail = new MailMessage
        {
            From = new MailAddress(smtpUsername),
            Subject = subject,
            Body = body,
            IsBodyHtml = false
        };

        if (to != null) mail.To.Add(to);

        try
        {
            using var smtpClient = new SmtpClient(smtpHost);
            smtpClient.Port = smtpPort;
            smtpClient.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
            smtpClient.EnableSsl = true;

            smtpClient.Send(mail);
            Console.WriteLine("Письмо успешно отправлено!");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Ошибка при отправке письма: {ex.Message}");
        }
    }
}