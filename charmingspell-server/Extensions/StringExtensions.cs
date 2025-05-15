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
}