import moment from "moment";

import {
  ErrorMessage,
  ResponseError,
  SizeUnits,
  DifficultyLevel,
} from "./types";

import { TIMESTAMP_FORMAT, DATE_FORMAT, TIME_FORMAT } from "./constants";

export function extractErrorPayload(error: ResponseError): ErrorMessage {
  /*
  todo: тут нужен жесткий рефакторить и проброс рантайм исключений т.к. они тут тупо застревают
  todo: типы тут полная хуйня, но сейчас нет нормального контракта
  */

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

export function parseTimestamp(
  timestamp: string,
  timeFormat: string = TIME_FORMAT,
  dateFormat: string = DATE_FORMAT,
  timestampFormat: string = TIMESTAMP_FORMAT
): {
  time: string;
  date: string;
} {
  /*
  Забирает из таймстампа описанного в ISO 8601 (YYYY-MM-DDTHH:mm:ssZ) формате время и дату и преобразует их в желаемый формат

  Шаблоны формата описаны в https://momentjs.com/docs/#/displaying/format/

  todo: было бы хорошо разделить парсинг и форматирование на разные функции, но пока что похуй
  */

  const date = moment(timestamp, timestampFormat);

  return {
    time: date.format(timeFormat),
    date: date.format(dateFormat),
  };
}

export function formatDateAndTimeAsTimestamp(
  time: string,
  date: string,
  timeFormat: string = TIME_FORMAT,
  dateFormat: string = DATE_FORMAT,
  timestampFormat: string = TIMESTAMP_FORMAT
): string {
  /*
  Преобразует время и дату в формат указанный в timestampFormat, или в ISO 8601 (YYYY-MM-DDTHH:mm:ssZ) по умолчанию

  Шаблоны формата описаны в https://momentjs.com/docs/#/displaying/format/
  */

  const timestampMoment = moment(
    `${date}T${time}`,
    `${dateFormat}T${timeFormat}`
  );

  return timestampMoment.format(timestampFormat);
}

export function getSizeUnitsRu(sizeUnits: SizeUnits): string {
  /*
  Переводит название единиц измерения с забугорного на русский
  */

  switch (sizeUnits) {
    case SizeUnits.METER:
      return "Метр";
    case SizeUnits.HECTARE:
      return "Гектар";
  }
}

export function getDifficultyLevelRu(difficultyLevel: DifficultyLevel): string {
  /*
  Переводит название номеров вызова с забугорного (почти) на русский
  */

  switch (difficultyLevel) {
    case DifficultyLevel.ONE:
      return "1";
    case DifficultyLevel.ONE_BIS:
      return "1-БИС";
    case DifficultyLevel.TWO:
      return "2";
    case DifficultyLevel.THREE:
      return "3";
  }
}
