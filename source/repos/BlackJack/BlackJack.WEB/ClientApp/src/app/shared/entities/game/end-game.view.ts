import { CardRankType } from '../../enums/card-rank-type.view';
import { CardSuitType } from '../../enums/card-suit-type.view';
import { StatusType } from '../../enums/status-type.enum.view';

export class EndGameView {
    status: StatusType;
    winner: string;
    player:PlayerEndGameView;
    bots:BotEndGameViewItem[] = [];
}
export class PlayerEndGameView{
    name:string;
    cards:CardEndGameViewItem[] = [];
}
export class BotEndGameViewItem{
    name:string;
    cards:CardEndGameViewItem[] = [];
}
export class CardEndGameViewItem{
    rank:CardRankType;
    suit:CardSuitType;
}