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
