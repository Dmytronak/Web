import { Status } from '../enums/status-type.enum.view';

export class PlayGame {;
    email: string;
    numberOfBots: number;
    status: string;
    winner: string;
    player:[PlayGamePlayerViewItem];
    bots:[PlayGameBotsViewItem];
}
export class PlayGamePlayerViewItem{
    name:string;
    cards:[PlayGameCardsViewItem];
}
export class PlayGameBotsViewItem{
    name:string;
    cards:[PlayGameCardsViewItem];
}
export class PlayGameCardsViewItem{
    rank:number;
    suit:number;
}