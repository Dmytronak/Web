import { CardRankType } from 'src/app/shared/enums/card-rank-type.view';
import { CardSuitType } from 'src/app/shared/enums/card-suit-type.view';

export class GetPlayerStepsHistoryView{
    gameId:string;
    name:string;
    steps:CardGetPlayerStepsHistoryViewItem[] = [];
}
export class CardGetPlayerStepsHistoryViewItem{
    rank:CardRankType;
    suit:CardSuitType;
}