using Library_System.Data;
using Library_System.Repositories;
using Library_System.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add connection string 
builder.Services.AddDbContext<LibraryContext>(
        options => options.UseSqlite("name=ConnectionStrings:LocalDb"));

builder.Services.AddScoped<ILibraryBookRepository, LibraryBookRepository>(); 
builder.Services.AddScoped<ILibraryService, LibraryService>();

builder.Services.AddScoped<IUserRepository, UserRepository>(); 
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddCors(o =>
{
    o.AddPolicy("corspolicy", build =>
    {
        build.WithOrigins("http://localhost:5173").AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corspolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
