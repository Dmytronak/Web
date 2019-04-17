using Newtonsoft.Json.Linq;
using System;

namespace BlackJack.BusinessLogic.Providers
{
    public class HttpStatusCodeException : Exception
    {
        public int StatusCode { get; set; }
        public string ContentType { get; set; } = @"application/json";

        public HttpStatusCodeException(int statusCode)
        {
            this.StatusCode = statusCode;
        }
        public HttpStatusCodeException(string message) : base(message)
        {
        }
        public HttpStatusCodeException(int statusCode, string message) : base(message)
        {
            this.StatusCode = statusCode;
        }
        public HttpStatusCodeException(int statusCode, Exception inner) : this(statusCode, inner.ToString()) { }

        public HttpStatusCodeException(int statusCode, JObject errorObject) : this(statusCode, errorObject.ToString())
        {
          
        }
    }
}
