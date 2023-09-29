import axios from "axios";

import { API_BASE_URL } from "../constants";

import { SizeUnits, DifficultyLevel } from "../types";

interface CardBase {
  id?: number;
  address: string;
  applicant: string;
  phone_number: string;
  status: number; // todo: proper enumeration
  reason: string;
  place_description: string;
  size: number;
  size_units: SizeUnits;
  time_of_call: number; // timestamp
  difficulty_level: DifficultyLevel;
  squad_numbers: number[];
}

interface CardToCreate extends CardBase {}

export default class CardService {
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async addCard(card: CardToCreate): Promise<number> {
    return axios.post(
      `${API_BASE_URL}/card/`,
      {
        ...card,
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
  }
}
