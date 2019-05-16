export class PlayGame {;
    email: string;
    numberOfBots: number;
    status: string;
    winner: string;
    player:PlayerPlayGameViewItem;
    bots:[BotPlayGameViewItem];
}
export class PlayerPlayGameViewItem{
    name:string;
    cards:[CardPlayGameViewItem];
}
export class BotPlayGameViewItem{
    name:string;
    cards:[CardPlayGameViewItem];
}
export class CardPlayGameViewItem{
    rank:number;
    suit:number;
}