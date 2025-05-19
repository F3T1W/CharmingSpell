using charmingspell_server.Services;

namespace charmingspell_server.Utility;

public static class SendVerification
{
    public static void SendVerificationEmail(EmailService emailService, string email, string verificationToken)
    {
        var verificationLink = $"http://localhost:5173/verify/{verificationToken}";
        const string subject = "Подтверждение регистрации";
        var body = $"<h1>Подтвердите ваш аккаунт</h1><p>Перейдите по ссылке для подтверждения: <a href='{verificationLink}'>{verificationLink}</a></p>";

        emailService.SendEmail(email, subject, body);
    }
}