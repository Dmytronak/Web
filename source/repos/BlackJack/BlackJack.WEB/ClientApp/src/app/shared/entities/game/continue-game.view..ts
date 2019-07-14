import { CardRankType } from 'src/app/shared/enums/card-rank-type.view';
import { CardSuitType } from 'src/app/shared/enums/card-suit-type.view';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

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