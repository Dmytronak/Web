using System;

public class CustomServiceException : Exception
{
    public CustomServiceException(string message)
        : base(message)
    {
    }
}