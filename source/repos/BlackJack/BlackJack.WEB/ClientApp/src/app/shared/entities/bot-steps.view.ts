export class BotSteps{
    gameId:string;
    bots:[BotBotStepsHistoryViewItem];
}
export class BotBotStepsHistoryViewItem{
    name:string;
    steps:[CardBotStepsHistoryViewItem];
}
export class CardBotStepsHistoryViewItem{
    rank:number;
    suit:number;
}