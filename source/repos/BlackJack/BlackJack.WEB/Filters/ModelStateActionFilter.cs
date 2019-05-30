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
                context.Result = new BadRequestObjectResult(
                    context.ModelState.Values
                    .Select(x => x.Errors)
                    .FirstOrDefault());
            }
        }

    }
}

