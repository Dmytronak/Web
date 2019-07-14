import { CardRankType } from 'src/app/shared/enums/card-rank-type.view';
import { CardSuitType } from 'src/app/shared/enums/card-suit-type.view';
import { StatusType } from 'src/app/shared/enums/status-type.enum.view';

export class PlayGameView {
    numberOfBots: number;
    status: StatusType;
    winner: string;
    player:PlayerPlayGameView;
    bots:BotPlayGameViewItem[] = [];
}
export class PlayerPlayGameView{
    name:string;
    cards:CardPlayGameViewItem[] = [];
}
export class BotPlayGameViewItem{
    name:string;
    cards:CardPlayGameViewItem[] = [];
}
export class CardPlayGameViewItem{
    rank:CardRankType;
    suit:CardSuitType;
}