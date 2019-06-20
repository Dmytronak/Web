export class GetContinueGameView {
    status: string;
    winner: string;
    player:PlayerGetContinueGameView;
    bots:BotGetContinueGameViewItem[];
}
export class PlayerGetContinueGameView{
    name:string;
    cards:CardGetContinueGameViewItem[];
}
export class BotGetContinueGameViewItem{
    name:string;
    cards:CardGetContinueGameViewItem[];
}
export class CardGetContinueGameViewItem{
    rank:number;
    suit:number;
}