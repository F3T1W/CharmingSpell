using charmingspell_server.Services;

namespace charmingspell_server.Utility;

public static class SendVerification
{
    public static void SendVerificationEmail(EmailService emailService, string? email, string token)
    {
        var verificationLink = $"http://localhost:5173/verify?token={token}";
        const string subject = "Подтвердите ваш аккаунт";
        var body = $"Пожалуйста, подтвердите ваш аккаунт, перейдя по ссылке: {verificationLink}";

        emailService.SendEmail(email, subject, body);
    }
}