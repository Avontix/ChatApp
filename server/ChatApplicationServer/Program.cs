using ChatApplicationServer.Context;
using ChatApplicationServer.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("ChatDB");
builder.Services.AddDbContext<ChatContext>(opt => opt.UseSqlServer(connectionString, b => b.MigrationsAssembly(typeof(Program).Assembly.FullName)));
builder.Services.AddControllers();
builder.Services.AddCors(x => x.AddDefaultPolicy(y => y.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin()));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IRegisterService, RegisterService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors();
app.Run();
