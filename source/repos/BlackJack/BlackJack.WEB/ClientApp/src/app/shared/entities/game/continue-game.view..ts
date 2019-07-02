import { CardRankType } from '../../enums/card-rank-type.view';
import { CardSuitType } from '../../enums/card-suit-type.view';
import { StatusType } from '../../enums/status-type.enum.view';

export class ContinueGameView {
    status: StatusType;
    winner: string;
    player:PlayerContinueGameView;
    bots:BotContinueGameViewItem[] = [];
}
export class PlayerContinueGameView{
    name:string;
    cards:CardContinueGameViewItem[] = [];
}
export class BotContinueGameViewItem{
    name:string;
    cards:CardContinueGameViewItem[] = [];
}
export class CardContinueGameViewItem{
    rank:CardRankType;
    suit:CardSuitType;
}