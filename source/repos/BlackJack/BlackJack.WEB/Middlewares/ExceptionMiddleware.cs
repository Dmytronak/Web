using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Threading.Tasks;

namespace BlackJack.WEB.Middlewares
{
    public class ExceptionMiddleware
    {

        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (CustomServiceException ex)
            {
                await HandleExceptionAsync(context, ex, HttpStatusCode.BadRequest);
            }
            catch (UnauthorizedAccessException ex)
            {
                await HandleExceptionAsync(context, ex, HttpStatusCode.Unauthorized);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex, HttpStatusCode.InternalServerError);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex, HttpStatusCode statusCode)
        {
            var result = (int)statusCode >= 500 ?
                $"Status code: {statusCode}":
                ex.Message;
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)statusCode;
            return context.Response.WriteAsync(result);
        }
    }
   
}
