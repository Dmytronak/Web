namespace BlackJack.ViewModels.JwtProviderView
{
    public class JwtConfigurationView
    {
        public string JwtKey { get; set; }
        public string JwtIssuer { get; set; }
        public int JwtExpireHours { get; set; }
    }
}
