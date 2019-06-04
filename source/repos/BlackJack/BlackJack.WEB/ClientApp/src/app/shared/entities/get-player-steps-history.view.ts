export class GetPlayerStepsHistoryView{
    gameId:string;
    name:string;
    playerSteps:CardGetPlayerStepsHistoryViewItem[];
}
export class CardGetPlayerStepsHistoryViewItem{
    rank:number;
    suit:number;
}