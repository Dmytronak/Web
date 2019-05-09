export class BotSteps{
    gameId:string;
    bots:[BotStepsHistoryViewItem];
}
export class BotStepsHistoryViewItem{
    name:string;
    steps:[BotCardViewItem];
}
export class BotCardViewItem{
    rank:number;
    suit:number;
}