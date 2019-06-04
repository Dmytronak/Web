export class GetBotStepsHistoryView{
    gameId:string;
    bots:BotGetBotStepsHistoryViewItem[];
}
export class BotGetBotStepsHistoryViewItem{
    name:string;
    steps:CardGetBotStepsHistoryViewItem[];
}
export class CardGetBotStepsHistoryViewItem{
    rank:number;
    suit:number;
}