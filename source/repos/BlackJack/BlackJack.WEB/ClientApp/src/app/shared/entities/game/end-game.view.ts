export class EndGameView {
    status: string;
    winner: string;
    player:PlayerEndGameView;
    bots:BotEndGameViewItem[];
}
export class PlayerEndGameView{
    name:string;
    cards:CardEndGameViewItem[];
}
export class BotEndGameViewItem{
    name:string;
    cards:CardEndGameViewItem[];
}
export class CardEndGameViewItem{
    rank:number;
    suit:number;
}