import { StatusType } from '../../enums/status-type.enum.view';

export class GetAllGamesHistoryView {
    totalGamesCount:number;
    games:GameGetAllGamesHistoryViewItem[] = [];
}
export class GameGetAllGamesHistoryViewItem {
    id:string;
    numberOfBots:number;
    status:StatusType;
    winner:string;
}