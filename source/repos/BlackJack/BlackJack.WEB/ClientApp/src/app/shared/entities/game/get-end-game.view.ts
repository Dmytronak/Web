export class GetEndGameView {
    status: string;
    winner: string;
    player:PlayerGetEndGameView;
    bots:BotGetEndGameViewItem[];
}
export class PlayerGetEndGameView{
    name:string;
    cards:CardGetEndGameViewItem[];
}
export class BotGetEndGameViewItem{
    name:string;
    cards:CardGetEndGameViewItem[];
}
export class CardGetEndGameViewItem{
    rank:number;
    suit:number;
}