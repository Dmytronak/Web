using BlackJack.BusinessLogic.Providers;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Threading.Tasks;

namespace BlackJack.Extension
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
            catch (HttpStatusCodeException exception)
            {
                await HandleExceptionAsync(context, exception);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
           
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
           
            var code = HttpStatusCode.InternalServerError; // 500 if unexpected
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            var result = JsonConvert.SerializeObject(new { error = "Status code: " + (int)code + "Messege:" + ex.Message });
            return context.Response.WriteAsync(result);
        }
        private static Task HandleExceptionAsync(HttpContext context, HttpStatusCodeException exception)
        {
            var code = exception.StatusCode;
            string errors = "Messege: "+ exception.Message;
            context.Response.ContentType = exception.ContentType;
            context.Response.StatusCode = 404;
            if (code>400)
            {
                context.Response.StatusCode = code;
                errors = "Status code: " +code+ " Messege: " + exception.Message;
                context.Response.StatusCode = code;

            }
            
            var result = JsonConvert.SerializeObject(new { error = errors });
            return context.Response.WriteAsync(result);
        }


    }
   
}
