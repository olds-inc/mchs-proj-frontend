import { CardModel } from "../types";

export enum CardsReducerActionType {
  LOADED,
}

export default function cardsReducer(
  cards: CardModel[],
  action: { type: CardsReducerActionType; payload: any }
) {
  switch (action.type) {
    case CardsReducerActionType.LOADED: {
      return [...action.payload];
    }
    default: {
      return [...cards];
    }
  }
}
