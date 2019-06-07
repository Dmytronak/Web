export class ContinueGameView {
    status: string;
    winner: string;
    player:PlayerContinueGameView;
    bots:BotContinueGameViewItem[];
}
export class PlayerContinueGameView{
    name:string;
    cards:CardContinueGameViewItem[];
}
export class BotContinueGameViewItem{
    name:string;
    cards:CardContinueGameViewItem[];
}
export class CardContinueGameViewItem{
    rank:number;
    suit:number;
}