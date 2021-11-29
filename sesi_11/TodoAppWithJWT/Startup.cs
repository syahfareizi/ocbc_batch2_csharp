using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using TodoAppWithJWT.Configuration;
using TodoAppWithJWT.Models;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using TodoAppWithJWT.Data;
using Microsoft.AspNetCore.HttpsPolicy;



namespace TodoAppWithJWT
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddDbContext<ApiDbContext>(options =>
            //    options.UseSqlite(
            //        Configuration.GetConnectionString("DefaultConnection")
            //    ));
            services.Configure<JwtConfig>(Configuration.GetSection("JwtConfig"));
            // services.AddControllers();
            // services.AddSwaggerGen(c =>
            // {
            //     c.SwaggerDoc("v1", new OpenApiInfo { Title = "TodoAppWithJWT", Version = "v1" });
            // });

            // Menambahkan Depemdency Injection

            var key = Encoding.ASCII.GetBytes(Configuration["JwtConfig:Secret"]);

            var TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = false,
                ClockSkew = TimeSpan.Zero
            };

            //  In this paragraph , We will configure authentication and set the default scheme 
            services.AddSingleton(TokenValidationParameters);
            services.AddAuthentication(options =>
            {

                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;

                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            })

            .AddJwtBearer(jwt =>
            {

                // var key = Encoding.ASCII.GetBytes(Configuration["JwtConfig:Secret"]);

                jwt.SaveToken = true;

                //jwt.TokenValidationParameters = new TokenValidationParameters
                jwt.TokenValidationParameters = TokenValidationParameters;
                

            });

            services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)

                        .AddEntityFrameworkStores<ApiDbContext>();
            services.AddDbContext<ApiDbContext>(options =>
            options.UseSqlite(
            Configuration.GetConnectionString("DefaultConnection")
    ));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TodoAppWithJWT", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter 'Bearer' [space] and then your valid token in the text input below.\r\n\r\nExample: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\""
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme {
                            Reference = new OpenApiReference {
                                            Type = ReferenceType.SecurityScheme,
                                            Id = "Bearer"
                                        }
                        },
                        new string[] { }
                    }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoAppWithJWT v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.UseAuthentication();
        }

    }
}
