import { CardRankType } from 'src/app/shared/enums/card-rank-type.view';
import { CardSuitType } from 'src/app/shared/enums/card-suit-type.view';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

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