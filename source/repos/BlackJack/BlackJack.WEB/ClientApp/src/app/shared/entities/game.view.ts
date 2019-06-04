export class GameView {
    numberOfBots: number;
    status: string;
    winner: string;
    player:PlayerGameView;
    bots:BotGameViewItem[];
}
export class PlayerGameView{
    name:string;
    cards:CardGameViewItem[];
}
export class BotGameViewItem{
    name:string;
    cards:CardGameViewItem[];
}
export class CardGameViewItem{
    rank:number;
    suit:number;
}