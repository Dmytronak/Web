export class BotSteps{
    gameId:string;
    botSteps:[BotStepsHistoryViewItem];
}
export class BotStepsHistoryViewItem{
    botName:string;
    botSteps:[BotCardViewItem];
}
export class BotCardViewItem{
    stepRank:number;
    stepSuit:number;
}