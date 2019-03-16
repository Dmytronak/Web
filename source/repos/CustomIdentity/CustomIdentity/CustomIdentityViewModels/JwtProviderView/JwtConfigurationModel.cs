namespace CustomIdentity.ViewModels.JwtProviderView
{
    public class JwtConfigurationModel
    {
        public string JwtKey { get; set; }
        public string JwtIssuer { get; set; }
        public int JwtExpireHours { get; set; }
    }
}
