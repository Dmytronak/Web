namespace BlackJack.BusinessLogic.Options
{
    public class JwtOption
    {
        public string Key { get; set; }
        public string Issuer { get; set; }
        public int ExpireHours { get; set; }
    }
}
