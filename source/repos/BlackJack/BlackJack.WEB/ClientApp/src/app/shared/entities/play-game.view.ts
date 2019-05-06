export class PlayGame {
    playerId: string;
    gameId: string;
    numberOfBots: number;
    status: string;
    winner: string;
    playerName: string;
    playerCards:[PlayGameCardsViewItem];
    bots:[PlayGameBotsViewItem];
}
export class PlayGameBotsViewItem{
    Name:string;
    botCards:[PlayGameCardsViewItem];
}
export class PlayGameCardsViewItem{
    rank:number;
    suit:number;
}