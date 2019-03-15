﻿using CustomIdentity.ViewModels.AccountViews;
using System.Threading.Tasks;

namespace CustomIdentity.BusinessLogic.Interfaces
{
    public interface IAccountService
    {
        Task<string> Login(LoginAccountView model);
        Task<string> Register(RegisterAccountView model);
    }
}
