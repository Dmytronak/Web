using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Threading.Tasks;

namespace Project.Web.Extations
{
    public class ExceptionMiddleware
    {
  
            private readonly RequestDelegate next;

            public ExceptionMiddleware(RequestDelegate next)
            {
                this.next = next;
            }

            public async Task Invoke(HttpContext context)
            {
                try
                {
                    await next(context);
                }
                catch (Exception ex)
                {
                    await HandleExceptionAsync(context, ex);
                }
            }

            private static Task HandleExceptionAsync(HttpContext context, Exception exception)
            {
                var code = HttpStatusCode.InternalServerError; // 500 if unexpected

                //if (exception is MyNotFoundException) code = HttpStatusCode.NotFound;
                //else if (exception is MyUnauthorizedException) code = HttpStatusCode.Unauthorized;
                //else if (exception is MyException) code = HttpStatusCode.BadRequest;

                var result = JsonConvert.SerializeObject(new { error = exception.Message });
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)code;
                return context.Response.WriteAsync(result);
            }
       
    }
}
