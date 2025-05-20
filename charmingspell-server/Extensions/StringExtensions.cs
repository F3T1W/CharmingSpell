using System.Security.Cryptography;
using System.Text;

namespace charmingspell_server.Extensions;

public static class StringExtensions
{
    public static string? HashPassword(this string? password)
    {
        if (password == null) return null;
        var hashedBytes = SHA256.HashData(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(hashedBytes);
    }
    
    public static bool VerifyPassword(this string password, string? passwordHash)
    {
        if (string.IsNullOrEmpty(password))
            throw new ArgumentException("Пароль не может быть пустым.", nameof(password));

        if (string.IsNullOrEmpty(passwordHash))
            throw new ArgumentException("Хэш пароля не может быть пустым.", nameof(passwordHash));

        return BCrypt.Net.BCrypt.Verify(password, passwordHash);
    }
}