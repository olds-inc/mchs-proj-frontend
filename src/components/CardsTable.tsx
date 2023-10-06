import React from "react";
import { createUseStyles } from "react-jss";
import { CircleFill } from "react-bootstrap-icons";

import { CardModel, CardStatus } from "../types";

import { getDifficultyLevelRu } from "../utils";

const styles = createUseStyles({
  table: {
    width: "100%",
    marginBottom: "45px",
    paddingRight: "50px",
  },
  tableHead: {
    backgroundColor: "#24263A",

    "& tr": {
      color: "white",
      fontSize: 14,
      fontWeight: "700",
      textAlign: "center",
    },

    "& th": {
      padding: "20px",

      "&:first-child": {
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      },

      "&:last-child": {
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      },
    },
  },
  tableBody: {
    "& tr": {
      color: "white",
      fontSize: 14,
      fontWeight: "500",
      textAlign: "center",
    },

    "& td": {
      padding: "15px 20px",
      boxShadow: "0px 1px 0px #24263A",

      "&:first-child": {
        borderBottomLeftRadius: "10px",
      },

      "&:last-child": {
        borderBottomRightRadius: "10px",
      },
    },
  },
  statusIcon: {
    "&.new": {
      color: "#D3434D",
    },
    "&.finished": {
      color: "#8FCFC1",
    },
  },
  paginationList: {
    listStyle: "none",
    display: "flex",
  },
  paginationListItem: {
    padding: "10px 20px",
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    cursor: "pointer",
  },
});

export default function CardsTable({ cards }: { cards: CardModel[] }) {
  const classes = styles();

  return (
    <table className={classes.table}>
      <thead className={classes.tableHead}>
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
      <tbody className={classes.tableBody}>
        {cards.map((card) => {
          return (
            <tr key={card.id}>
              <td>{card.id}</td>
              <td>
                <CircleFill
                  size={15}
                  // я ненавижу css
                  className={`${
                    classes.statusIcon
                  } ${getCardStatusColorClassName(card.status)}`}
                />
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
    </table>
  );
}

function getCardStatusColorClassName(cardStatus: CardStatus): string {
  switch (cardStatus) {
    case CardStatus.NEW:
      return "new";
    case CardStatus.FINISHED:
      return "finished";
    default:
      return "";
  }
}
