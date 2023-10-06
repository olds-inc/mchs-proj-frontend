import { CardModel } from "../types";

export enum CardsReducerActionType {
  ADD,
  LOADED,
}

interface CardsReducesState {
  cards: CardModel[];
  total?: number;
}

export default function cardsReducer(
  state: CardsReducesState,
  action: { type: CardsReducerActionType; state: CardsReducesState }
) {
  switch (action.type) {
    case CardsReducerActionType.ADD: {
      return {
        ...state,
        ...action.state.cards,
      };
    }
    case CardsReducerActionType.LOADED: {
      return {
        ...state,
        ...action.state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
