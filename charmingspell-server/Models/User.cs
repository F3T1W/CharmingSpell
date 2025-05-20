using System.ComponentModel.DataAnnotations;

namespace charmingspell_server.Models;

public class User
{
    [Key]
    public int Id { get; init; }

    [Required]
    public string? Email { get; init; }

    [Required]
    public string? PasswordHash { get; init; }
    
    public string? VerificationToken { get; set; }
    
    public bool IsVerified { get; set; }
    
    public string Role { get; set; } = "User";
    
    
}