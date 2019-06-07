export class PlayGameView {
    numberOfBots: number;
    status: string;
    winner: string;
    player:PlayerPlayGameView;
    bots:BotPlayGameViewItem[];
}
export class PlayerPlayGameView{
    name:string;
    cards:CardPlayGameViewItem[];
}
export class BotPlayGameViewItem{
    name:string;
    cards:CardPlayGameViewItem[];
}
export class CardPlayGameViewItem{
    rank:number;
    suit:number;
}