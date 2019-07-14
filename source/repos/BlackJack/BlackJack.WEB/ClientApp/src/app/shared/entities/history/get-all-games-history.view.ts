import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

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