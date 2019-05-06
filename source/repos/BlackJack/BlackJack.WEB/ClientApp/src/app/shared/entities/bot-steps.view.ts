export class BotSteps{
    gameId:string;
    botSteps:[BotStepsHistoryViewItem];
}
export class BotStepsHistoryViewItem{
    Name:string;
    botSteps:[BotCardViewItem];
}
export class BotCardViewItem{
    rank:number;
    suit:number;
}