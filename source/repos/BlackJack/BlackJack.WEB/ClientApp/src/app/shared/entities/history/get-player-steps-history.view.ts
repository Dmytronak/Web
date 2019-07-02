import { CardRankType } from '../../enums/card-rank-type.view';
import { CardSuitType } from '../../enums/card-suit-type.view';

export class GetPlayerStepsHistoryView{
    gameId:string;
    name:string;
    steps:CardGetPlayerStepsHistoryViewItem[] = [];
}
export class CardGetPlayerStepsHistoryViewItem{
    rank:CardRankType;
    suit:CardSuitType;
}