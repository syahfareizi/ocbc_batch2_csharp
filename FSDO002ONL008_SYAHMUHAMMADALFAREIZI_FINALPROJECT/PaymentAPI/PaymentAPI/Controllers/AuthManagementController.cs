﻿using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PaymentAPI.Configuration;
using PaymentAPI.Models.DTOs.Requests;
using PaymentAPI.Models.DTOs.Responses;
using System;
using System.Collections.Generic;

using PaymentAPI.Data;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;

namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")] // api/authmanagement
    [ApiController]
    public class AuthManagementController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly JwtConfig _jwtConfig;
        private readonly TokenValidationParameters _tokenValidationParams;
        private readonly ApiDbContext _apiDbContext;
        public AuthManagementController(
           UserManager<IdentityUser> userManager,
           IOptionsMonitor<JwtConfig> optionsMonitor,
           TokenValidationParameters tokenValidationParams,
           ApiDbContext apiDbContext)
        {
            _userManager = userManager;
            _jwtConfig = optionsMonitor.CurrentValue;
            _tokenValidationParams = tokenValidationParams;
            _apiDbContext = apiDbContext;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationDto user)
        {
            //  Check that the incoming request is valid 

            if (ModelState.IsValid)
            {
                //  Check the existence of users using the same e-mail 
                var existingUser = await _userManager.FindByEmailAsync(user.Email);
                if (existingUser != null)
                {
                    return BadRequest(new RegistrationResponse()

                    {

                        Errors = new List<string>()

                    {

                        "Email already in use"

                    },

                        Success = false

                    });

                }

                var newUser = new IdentityUser() { Email = user.Email, UserName = user.Username };

                var isCreated = await _userManager.CreateAsync(newUser, user.Password);

                if (isCreated.Succeeded)

                {

                    // var jwtToken = GenerateJwtToken(newUser);

                    // return Ok(new RegistrationResponse()

                    // {

                    //     Success = true,

                    //     Token = jwtToken

                    // });
                    var jwtToken = await GenerateJwtToken(newUser);

                    return Ok(jwtToken); ;

                }

                else

                {

                    return BadRequest(new RegistrationResponse()

                    {

                        Errors = isCreated.Errors.Select(x => x.Description).ToList(),

                        Success = false

                    });

                }

            }

            return BadRequest(new RegistrationResponse()

            {

                Errors = new List<string>()

            {

                "Invalid payload"

            },

                Success = false

            });

        }
        private async Task<AuthResult> GenerateJwtToken(IdentityUser user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtConfig.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("Id", user.Id),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddSeconds(1800),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = jwtTokenHandler.WriteToken(token);

            var refreshToken = new RefreshToken()
            {
                JwtId = token.Id,
                IsUsed = false,
                IsRevorked = false,
                UserId = user.Id,
                AddedDate = DateTime.UtcNow,
                ExpiryDate = DateTime.UtcNow.AddSeconds(1800),
                Token = RadomString(35) + Guid.NewGuid()
            };

            await _apiDbContext.RefreshToken.AddAsync(refreshToken);
            await _apiDbContext.SaveChangesAsync();

            return new AuthResult()
            {
                Token = jwtToken,
                Success = true,
                RefreshToken = refreshToken.Token
            };
            // return jwtToken;
        }

        private string RadomString(int length)
        {
            var random = new Random();
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length).Select(x => x[random.Next(x.Length)]).ToArray());
        }

        //then , We need to be in AuthManagementController Add Login Method ：

        [HttpPost]

        [Route("Login")]

        public async Task<IActionResult> Login([FromBody] UserLoginRequest user)

        {

            if (ModelState.IsValid)

            {

                //  Check the existence of users using the same e-mail 

                var existingUser = await _userManager.FindByEmailAsync(user.Email);

                if (existingUser == null)

                {

                    //  For safety reasons , We don't want to reveal too much about the request failure 

                    return BadRequest(new RegistrationResponse()

                    {

                        Errors = new List<string>()

                {

                    "Invalid login request"

                },

                        Success = false

                    });

                }

                //  Now we need to check that the user has entered the correct password 

                var isCorrect = await _userManager.CheckPasswordAsync(existingUser, user.Password);

                if (!isCorrect)

                {

                    //  For safety reasons , We don't want to reveal too much about the request failure 

                    return BadRequest(new RegistrationResponse()

                    {

                        Errors = new List<string>()

                {

                    "Invalid login request"

                },

                        Success = false

                    });

                }
                var jwtToken = await GenerateJwtToken(existingUser);

                return Ok(jwtToken); ;

            }

            return BadRequest(new RegistrationResponse()
            {
                Errors = new List<string>()
            {
            "Invalid payload"
            },
                Success = false
            });
        }
        [HttpPost]
        [Route("RefreshToken")]
        public async Task<IActionResult> RefreshToken([FromBody] TokenRequest tokenRequest)
        {
            if (ModelState.IsValid)
            {
                var result = await VerifyAndGenerateToken(tokenRequest);

                if (result == null)
                {
                    return BadRequest(new RegistrationResponse()
                    {
                        Errors = new List<string>() {
                            "Invalid tokens"
                        },
                        Success = false
                    });
                }
                return Ok(result);
            }

            return BadRequest(new RegistrationResponse()
            {
                Errors = new List<string>() {
                    "Invalid payload"
                },
                Success = false
            });
        }
        private async Task<AuthResult> VerifyAndGenerateToken(TokenRequest tokenRequest)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            try
            {

                var tokenInVerification = jwtTokenHandler.ValidateToken(tokenRequest.Token, _tokenValidationParams, out var validatedToken);


                if (validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    var result = jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase);
                    if (result == false)
                    {
                        return null;
                    }
                }


                var utcExpiryDate = long.Parse(tokenInVerification.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);
                var expiryDate = UnixTimeStampToDateTime(utcExpiryDate);

                if (expiryDate > DateTime.UtcNow)
                {
                    return new AuthResult()
                    {
                        Success = true,
                        Errors = new List<string>() {
                            "Token has not yet expired"
                        }
                    };
                }


                var storedToken = await _apiDbContext.RefreshToken.FirstOrDefaultAsync(x => x.Token == tokenRequest.RefreshToken);

                if (storedToken == null)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() {
                            "Token does not exist"
                        }
                    };
                }

                if (storedToken.IsUsed)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() {
                            "Token has been used"
                        }
                    };
                }

                if (storedToken.IsRevorked)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() {
                            "Token has been revoked"
                        }
                    };
                }

                var jti = tokenInVerification.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti).Value;

                if (storedToken.JwtId != jti)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() {
                            "Token doesn't match"
                        }
                    };
                }

                storedToken.IsUsed = true;
                _apiDbContext.RefreshToken.Update(storedToken);
                await _apiDbContext.SaveChangesAsync();

                var dbUser = await _userManager.FindByIdAsync(storedToken.UserId);
                return await GenerateJwtToken(dbUser);
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("Lifetime validation failed. The token is expired."))
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() {
                            "Token has expired please re-login"
                        }
                    };
                }
                else
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() {
                            "Something went wrong."
                        }
                    };
                }
            }
        }

        private DateTime UnixTimeStampToDateTime(long UnixTimeStamp)
        {
            var dateTimeVal = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTimeVal = dateTimeVal.AddSeconds(UnixTimeStamp).ToUniversalTime();

            return dateTimeVal;
        }

    }


}