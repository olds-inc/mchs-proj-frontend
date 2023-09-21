import axios from "axios";

import { API_BASE_URL } from "../constants";

interface CardBase {
  id?: number;
  address: string;
  comment: string;
  applicant: string;
  phone_number: string;
  copies: number;
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
