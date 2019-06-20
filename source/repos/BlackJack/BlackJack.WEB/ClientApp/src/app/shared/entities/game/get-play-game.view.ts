export class GetPlayGameView {
    numberOfBots: number;
    status: string;
    winner: string;
    player:PlayerGetPlayGameView;
    bots:BotGetPlayGameViewItem[];
}
export class PlayerGetPlayGameView{
    name:string;
    cards:CardGetPlayGameViewItem[];
}
export class BotGetPlayGameViewItem{
    name:string;
    cards:CardGetPlayGameViewItem[];
}
export class CardGetPlayGameViewItem{
    rank:number;
    suit:number;
}