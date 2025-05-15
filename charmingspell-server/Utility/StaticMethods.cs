namespace charmingspell_server.Utility;

public static class StaticMethods
{
    public static string GenerateVerificationToken()
    {
        return Guid.NewGuid().ToString();
    }
}