using charmingspell_server.Models;
using Microsoft.EntityFrameworkCore;

namespace charmingspell_server;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        const string connectionString = "Host=localhost;Database=keycloak;Username=keycloak_user;Password=keycloak_password";

        optionsBuilder.UseNpgsql(connectionString);
    }
}