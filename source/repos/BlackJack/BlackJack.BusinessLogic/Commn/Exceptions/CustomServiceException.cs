using System;

public class CustomServiceException : Exception
{
    public CustomServiceException()
    {
    }
    public CustomServiceException(string message)
        : base(message)
    {
    }
    public CustomServiceException(int statusCode, string message)
       : base(message)
    {
    }
    public CustomServiceException(string message, Exception inner)
        : base(message, inner)
    {
    }
}