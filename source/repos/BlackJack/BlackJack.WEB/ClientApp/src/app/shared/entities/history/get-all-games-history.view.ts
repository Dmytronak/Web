export class GetAllGamesHistoryView {
    games:GameGetAllGamesHistoryView[];
}
export class GameGetAllGamesHistoryView {
    id:string;
    numberOfBots:number;
    status:string;
    winner:string;
}