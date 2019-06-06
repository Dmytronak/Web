using BlackJack.BusinessLogic.Helpers.Interfaces;
using BlackJack.DataAccess.Entities;
using BlackJack.DataAccess.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJack.BusinessLogic.Helpers
{
    public class CardHelper : ICardHelper
    {
        public async Task<List<Card>> Shuffle()
        {
            var ranks = Enum.GetValues(typeof(CardRankType))
                .Cast<CardRankType>()
                .ToList();
            var suits = Enum.GetValues(typeof(CardSuitType))
                .Cast<CardSuitType>()
                .ToList();
            var deck = suits
                .SelectMany(s => ranks
                .Select(c => new Card()
                {
                    Suit = (CardSuitType)s,
                    Rank = (CardRankType)c
                }))
                .ToList();
            deck = deck.OrderBy(x => Guid.NewGuid()).ToList();
            return deck;
        }
    }
}
