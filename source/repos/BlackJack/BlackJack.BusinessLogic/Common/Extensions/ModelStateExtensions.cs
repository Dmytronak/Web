using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
using System.Linq;

namespace BlackJack.BusinessLogic.Common.Extensions
{
    public static class ModelStateExtensions
    {
        public static string GetFirstError(this ModelStateDictionary modelState)
        {
            var result = modelState
                .Values
                .Select(x => x.Errors
                .Select(d => d.ErrorMessage))
                .FirstOrDefault()
                .FirstOrDefault();
            return result;
        }
    }
}
