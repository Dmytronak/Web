export class GetPlayerStepsHistoryView{
    gameId:string;
    name:string;
    steps:CardGetPlayerStepsHistoryViewItem[];
}
export class CardGetPlayerStepsHistoryViewItem{
    rank:number;
    suit:number;
}