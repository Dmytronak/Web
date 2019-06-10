using BlackJack.BusinessLogic.Common.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Linq;

namespace BlackJack.Filters
{
    public class ModelStateActionFilter : Attribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {

        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var message = context.ModelState.GetFirstError();
                context.Result = new BadRequestObjectResult(message);
            }
        }

    }
}

