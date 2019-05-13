export class HistoryGame {
    email:string;
    games:[GameGetAllGamesHistoryView];
}
export class GameGetAllGamesHistoryView {
    id:string;
    numberOfBots:number;
    status:string;
    winner:string;
}