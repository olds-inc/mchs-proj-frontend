import React from "react";
import { Table } from "react-bootstrap";
import { CircleFill } from "react-bootstrap-icons";

export default function TablichkaEbanaya() {
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
        <tr>
          <td>#1</td>
          <td>
            <CircleFill size={15} className="text-danger" />
          </td>
          <td>04.09.2022</td>
          <td>20:05</td>
          <td>г. Энгельс, ул. Студенческая, 19</td>
          <td>Пожар</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>#2</td>
          <td>
            <CircleFill size={15} className="text-success" />
          </td>
          <td>04.09.2022</td>
          <td>20:05</td>
          <td>г. Энгельс, ул. Студенческая, 19</td>
          <td>Пожар</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </Table>
  );
}
