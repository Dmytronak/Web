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
    botName:string;
    botCards:[PlayGameCardsViewItem];
}
export class PlayGameCardsViewItem{
    stepRank:number;
    stepSuit:number;
}