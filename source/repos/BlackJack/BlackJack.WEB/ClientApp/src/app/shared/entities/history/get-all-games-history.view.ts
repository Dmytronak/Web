export class GetAllGamesHistoryView {
    games:GameGetAllGamesHistoryViewItem[];
}
export class GameGetAllGamesHistoryViewItem {
    id:string;
    numberOfBots:number;
    status:string;
    winner:string;
}