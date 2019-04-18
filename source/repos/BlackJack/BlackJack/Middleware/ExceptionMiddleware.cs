using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Threading.Tasks;

namespace BlackJack.Middleware
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

        private static Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
           
            var code = HttpStatusCode.InternalServerError; // 500 if unexpected
            if (ex is ArgumentNullException)
            {
                code = HttpStatusCode.NotFound;
            }
          
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            var result = JsonConvert.SerializeObject(new { error = "Status code: " + (int)code + " Messege:" + ex.Message });
            return context.Response.WriteAsync(result);
        }

    }
   
}
