using System;

public class CustomErrorException : UnauthorizedAccessException
{
    public CustomErrorException()
    {
    }
    public CustomErrorException(string message)
        : base(message)
    {
    }
    public CustomErrorException(int statusCode, string message)
       : base(message)
    {
    }
    public CustomErrorException(string message, Exception inner)
        : base(message, inner)
    {
    }
}