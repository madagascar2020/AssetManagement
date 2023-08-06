using Infrastructure.Database.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Linq;

namespace WebApi.Extensions
{
    public static class ServiceExtension
    {
        public static void ConfigureDbContext(this IServiceCollection services, IConfiguration configuration) =>
                services.AddDbContext<AssetManagementContext>(options =>
                {
                    options.UseSqlServer(configuration.GetConnectionString("AssetManagement"));
                });

        public static void ConfigureSwaggerGen(this IServiceCollection services) =>
          services.AddSwaggerGen(c =>
          {
              c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebApi", Version = "v1" });
              //  #region JWT Token
              //c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
              //{
              //    Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
              //        Enter 'Bearer' [space] and then your token in the text input below.
              //        \r\n\r\nExample: 'Bearer 12345abcdef'",
              //    Name = "Authorization",
              //    In = ParameterLocation.Header,
              //    Type = SecuritySchemeType.ApiKey,
              //    Scheme = "Bearer"
              //});

              //c.AddSecurityRequirement(new OpenApiSecurityRequirement()
              //  {
              //      {
              //        new OpenApiSecurityScheme
              //        {
              //          Reference = new OpenApiReference
              //            {
              //              Type = ReferenceType.SecurityScheme,
              //              Id = "Bearer"
              //            },
              //            Scheme = "oauth2",
              //            Name = "Bearer",
              //            In = ParameterLocation.Header,

              //          },
              //          new List<string>()
              //        }
              //    });

              //#endregion
          });


        public static void ConfigureCors(this IServiceCollection services, IConfiguration configuration) =>
            services.AddCors(options =>
            {
                var originsConfig = configuration.GetSection("AllowedCors").Value;
                var orginsArr = originsConfig?.Split(',', StringSplitOptions.RemoveEmptyEntries);

                if (originsConfig != "*" && (orginsArr?.Any() ?? false))
                {
                    options.AddPolicy("AllowSpecificOrigin",
                        builder => builder.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins(orginsArr));
                }
                else
                {
                    options.AddPolicy("AllowSpecificOrigin",
                        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
                }
            });
    }
}
