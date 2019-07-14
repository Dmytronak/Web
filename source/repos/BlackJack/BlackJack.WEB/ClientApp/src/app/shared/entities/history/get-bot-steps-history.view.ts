import { CardRankType } from 'src/app/shared/enums/card-rank-type.view';
import { CardSuitType } from 'src/app/shared/enums/card-suit-type.view';

export class GetBotStepsHistoryView{
    gameId:string;
    bots:BotGetBotStepsHistoryViewItem[] = [];
}
export class BotGetBotStepsHistoryViewItem{
    name:string;
    steps:CardGetBotStepsHistoryViewItem[] = [];
}
export class CardGetBotStepsHistoryViewItem{
    rank:CardRankType;
    suit:CardSuitType;
}