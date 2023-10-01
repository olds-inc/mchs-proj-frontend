import React from "react";
import { Table } from "react-bootstrap";
import { CircleFill } from "react-bootstrap-icons";

import { CardModel } from "../types";

import { getDifficultyLevelRu } from "../utils";

export default function TablichkaEbanaya({ cards }: { cards: CardModel[] }) {
  return (
    <Table className="text-center">
      <thead>
        <tr>
          <th></th>
          <th>Статус</th>
          <th>Дата</th>
          <th>Время сообщения</th>
          <th>Адрес</th>
          <th>Характер выезда</th>
          <th>Номер вызова</th>
          <th>Спасено</th>
          <th>Пострадало</th>
          <th>Погибло</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card) => {
          return (
            <tr key={card.id}>
              <td>{card.id}</td>
              <td>
                <CircleFill size={15} className="text-danger" />
              </td>
              <td>{card.callReceiveDatetime.date}</td>
              <td>{card.callReceiveDatetime.time}</td>
              <td>{card.address}</td>
              <td>{card.reason}</td>
              <td>{getDifficultyLevelRu(card.difficultyLevel)}</td>
              <td>{card.saved}</td>
              <td>{card.damaged}</td>
              <td>{card.rip}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
