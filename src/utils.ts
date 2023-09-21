import { ErrorMessage, ResponseError } from "./types";

export function extractErrorPayload(error: ResponseError): ErrorMessage {
  console.log(error.code);

  switch (error.code) {
    case "ERR_BAD_REQUEST":
      return {
        message: error.message,
        details: null,
      };
    case "ERR_NETWORK":
      return {
        message: "Произошла сетевая ошибка!",
        details: ["Скорее всего, бекенд сервер не включили"],
      };
    default:
      return {
        message: "Произошла совершенно неожиданная ошибка!",
        details: ["Я вообще не ебу что случилось, к сожалению"],
      };
  }
}
