import axios, { AxiosResponse } from "axios";

import { API_BASE_URL } from "../constants";

import { CardModel, DifficultyLevel, SizeUnits } from "../types";
import { parseTimestamp, formatDateAndTimeAsTimestamp } from "../utils";

interface CardResponseObject {
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

interface CardRequestObject {
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

export default class CardService {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async addCard(card: CardModel): Promise<number> {
    return axios.post(
      `${API_BASE_URL}/card/`,
      {
        ...transformCardModelToCreateRequest(card),
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
  }

  async getCards(): Promise<CardModel[]> {
    return axios
      .get(`${API_BASE_URL}/card/`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
      .then((response: GetCardsListResponse) => {
        return Promise.resolve(transformGetCardsListResponse(response));
      });
  }
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
