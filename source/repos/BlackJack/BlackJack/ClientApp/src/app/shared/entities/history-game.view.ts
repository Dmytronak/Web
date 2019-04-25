export class HistoryGame {
    email:string;
    games:[GetAllGamesViewItem];
}
export class GetAllGamesViewItem {
    id:string;
    playerName:string;
    numberOfBots:number;
    status:string;
    winner:string;
}