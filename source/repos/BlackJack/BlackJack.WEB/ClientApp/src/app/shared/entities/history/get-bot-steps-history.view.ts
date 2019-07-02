import { CardRankType } from '../../enums/card-rank-type.view';
import { CardSuitType } from '../../enums/card-suit-type.view';

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