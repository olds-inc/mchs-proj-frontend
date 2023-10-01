export type ResponseCode = "ERR_NETWORK" | "ERR_BAD_REQUEST";

export interface UserBase {
  email: string;
}

export interface UserTokens {
  accessToken: string;
  refreshToken: string;
}

export interface CurrentUser extends UserBase {
  tokens: UserTokens;
}

export interface ResponseError {
  message: string;
  code: ResponseCode;
}

export interface ErrorMessage {
  message: string;
  details?: string[];
}

/*
после создания карточки она всегда переходит в статус IN_PROGRESS т.к. у нее есть незаполненные поля
когда у карточки заполнены все поля она приобретает статус FINISHED
*/
export enum CardStatus {
  IN_PROGRESS = 0,
  FINISHED = 1,
}

export interface CardModel {
  id?: number; // id - может не быть у новой карточки

  address: string; // адрес
  callReceiveDatetime: {
    time: string; // время получения сообщения
    date: string; // дата получения сообщения
  };
  status: CardStatus;
  difficultyLevel: DifficultyLevel; // номер вызова
  // заявитель
  applicant: {
    name: string;
    phoneNumber: string;
  };
  // объект
  place: {
    description: string;
    size: number;
    sizeUnits: SizeUnits;
  };
  reason: string; // характер выезда
  squads: number[]; // привлекаются

  departureTime?: string; // время выезда
  arrivalTime?: string; // время прибытия к месту вызова
  firstTrunkApplyTime?: string; // время подчаи первого ствола
  localizationTime?: string; // время локализации
  openFireLiquidationTime?: string; // время ликвидации открытого горения
  liquidationTime?: string; // время ликвидации
  returnTime?: string; // время возвращения караулов
  saved?: number; // спасено
  damaged?: number; // пострадало
  rip?: number; // погибло
}

export enum SizeUnits {
  METER = 0,
  HECTARE = 1,
}

export enum DifficultyLevel {
  ONE = 0,
  ONE_BIS = 1,
  TWO = 2,
  THREE = 3,
}
