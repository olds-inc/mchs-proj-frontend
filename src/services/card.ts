import axios, { AxiosResponse } from "axios";

import { API_BASE_URL } from "../constants";

import { CardModel, CardStatus, DifficultyLevel, SizeUnits } from "../types";
import { parseTimestamp, formatDateAndTimeAsTimestamp } from "../utils";

// todo: по идее CardResponseObject и CardRequestObject должны схлопнуться в 1 тип но текущий бек к этому не готов

interface CardBackendObject {}

interface CardResponseObject extends CardBackendObject {
  card_id: number;
  status: number;
  time_of_call: string;
  address: string;
  reason: string;
  difficulty_level: number;
  rip: number;
  damaged: number;
  saved: number;
}

interface CardRequestObject extends CardBackendObject {
  status: number;
  time_of_call: string;
  address: string;
  reason: string;
  difficulty_level: DifficultyLevel;
  rip: number;
  damaged: number;
  saved: number;
  applicant: string;
  phone_number: string;
  place_description: string;
  size: number;
  size_units: SizeUnits;
  squad_numbers: number[];
}

interface GetCardsListResponse extends AxiosResponse {
  data: {
    cards: CardResponseObject[];
  };
}

interface GetSingleCardResponse extends AxiosResponse {
  data: {
    card_id: number;
  };
}

let lastId = 1;
let cardsStore: CardModel[] = [];

export const FAKE_CARD_TO_CREATE = {
  address: "г. Энгельс, ул Маршала Василевского, д.27, кв. 1",
  callReceiveDatetime: {
    time: "10:00",
    date: "04.09.2022",
  },
  status: Math.random() > 0.5 ? CardStatus.NEW : CardStatus.FINISHED,
  difficultyLevel: DifficultyLevel.ONE_BIS,
  applicant: {
    name: "Иванов И.И.",
    phoneNumber: "+79123456789",
  },
  place: {
    description: "Квартира, домашние вещи",
    size: 15,
    sizeUnits: SizeUnits.METER,
  },
  reason: "Пожар",
  squads: [271, 272, 975, 270, 141],
  rip: 0,
  damaged: 0,
  saved: 0,
};

export default class CardService {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;

    if (cardsStore.length == 0) {
      for (let i = 0; i < 30; i++) {
        const newCard = { ...FAKE_CARD_TO_CREATE, id: lastId++ };
        cardsStore.push(newCard);
      }
    }
  }

  /* fake CRUD goes here */

  async createCard(cardData: CardModel): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newCard = { ...cardData, id: lastId++ };

        cardsStore = [...cardsStore, newCard];

        resolve(newCard.id);
      }, 500);
    });
  }

  async readCard(cardId: number): Promise<CardModel> {
    return new Promise((resolve, reject) => {
      const card = cardsStore.find((card) => {
        card.id == cardId;
      });

      setTimeout(() => {
        resolve(card);
      }, 1000);
    });
  }

  async updateCard(cardData: CardModel): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cardsStore = cardsStore.map((card) => {
          if (card.id === cardData.id) {
            return cardData;
          }

          return card;
        });

        resolve(cardData.id);
      }, 1000);
    });
  }

  async deleteCard(cardId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cardsStore = cardsStore.filter((card) => {
          card.id !== cardId;
        });

        resolve(cardId);
      }, 1000);
    });
  }

  async readAllCards(
    offset: number = 0,
    limit: number = 10
  ): Promise<{ cards: CardModel[]; total: number }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // shallow copy is bad
        // but who cares
        const response = {
          cards: cardsStore.slice(offset, offset + limit),
          total: cardsStore.length,
        };

        console.log(response);

        resolve(response);
      }, 600);
    });
  }

  /* real CRUD goes here */

  // async addCard(card: CardModel): Promise<number> {
  //   return axios
  //     .post(
  //       `${API_BASE_URL}/card/`,
  //       {
  //         ...transformCardModelToCreateRequest(card),
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${this.accessToken}`,
  //         },
  //       }
  //     )
  //     .then((response: GetSingleCardResponse) => {
  //       return Promise.resolve(response.data.card_id);
  //     });
  // }

  // async getCards(): Promise<CardModel[]> {
  //   return axios
  //     .get(`${API_BASE_URL}/card/`, {
  //       headers: {
  //         Authorization: `Bearer ${this.accessToken}`,
  //       },
  //     })
  //     .then((response: GetCardsListResponse) => {
  //       return Promise.resolve(transformGetCardsListResponse(response));
  //     });
  // }
}

function transformGetCardsListResponse(
  response: GetCardsListResponse
): CardModel[] {
  return response.data.cards.map((card) => {
    const calculatedStatus = 1; // todo: calculate

    return {
      id: card.card_id,
      address: card.address,
      callReceiveDatetime: parseTimestamp(card.time_of_call),
      status: calculatedStatus,
      difficultyLevel: card.difficulty_level,
      applicant: {
        name: "fake", // todo:
        phoneNumber: "fake", // todo:
      },
      place: {
        description: "fale",
        size: 0,
        sizeUnits: 0,
      },
      reason: card.reason,
      squads: [], // todo:
      rip: card.rip,
      damaged: card.damaged,
      saved: card.saved,
    };
  });
}

function transformGetSingleCardResponse(
  response: GetSingleCardResponse
): CardModel {
  throw Error("not implemented");
}

function transformCardModelToCreateRequest(
  cardModel: CardModel
): CardRequestObject {
  return {
    status: 0, // todo: remove from api
    time_of_call: formatDateAndTimeAsTimestamp(
      cardModel.callReceiveDatetime.time,
      cardModel.callReceiveDatetime.date
    ),
    address: cardModel.address,
    reason: cardModel.reason,
    difficulty_level: cardModel.difficultyLevel,
    rip: cardModel.rip,
    damaged: cardModel.damaged,
    saved: cardModel.saved,
    applicant: cardModel.applicant.name,
    phone_number: cardModel.applicant.phoneNumber,
    place_description: cardModel.place.description,
    size: cardModel.place.size,
    size_units: cardModel.place.sizeUnits,
    squad_numbers: cardModel.squads,
  };
}

function transformCardModelToUpdateRequest(
  cardModel: CardModel
): CardRequestObject {
  throw Error("not implemented");
}
