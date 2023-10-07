import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Spinner } from "react-bootstrap";
import { Search, CircleFill } from "react-bootstrap-icons";

import { CardModel, CardStatus } from "../types";

import { getDifficultyLevelRu } from "../utils";

const styles = createUseStyles({
  table: {
    width: "100%",
    marginBottom: "40px",
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
      padding: "15px 20px",

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

      "&:hover": {
        backgroundColor: "#24263A",
      },

      "&.searchRow": {
        visibility: "hidden",
        border: "none",
        boxShadow: "none",

        "&.active": {
          visibility: "visible",
        },
        "&:hover": {
          backgroundColor: "unset",
        },

        "& td": {
          border: "none",
          boxShadow: "none",
        },

        "& input": {
          textAlign: "center",
          fontSize: 14,
          fontWeight: "500",
          width: "100%",
          backgroundColor: "#24263ABF",
          border: "none",
          borderRadius: "10px",
          padding: "5px 10px",
          color: "#fff",
          outline: "none",

          "&.active": {
            backgroundColor: "#F2A45F",
            color: "#14142B",
          },
        },
      },

      "&.spinnerRow": {
        border: "none",
        boxShadow: "none",

        "&:hover": {
          backgroundColor: "unset",
        },

        "& td": {
          border: "none",
          boxShadow: "none",
        },
      },
    },

    "& td": {
      padding: "15px 20px",
      boxShadow: "0px 1px 0px #24263A",

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
  statusIcon: {
    "&.new": {
      color: "#D3434D",
    },
    "&.finished": {
      color: "#8FCFC1",
    },
  },
  searchIcon: {
    cursor: "pointer",
  },
});

export default function CardsTable({
  cards,
  cardsLoading,
  searchActive,
  onSearchIconClick,
}: {
  cards: CardModel[];
  cardsLoading: boolean;
  searchActive: boolean;
  onSearchIconClick: (event: React.SyntheticEvent) => void;
}) {
  const classes = styles();

  function renderBody(cards: CardModel[]): React.ReactNode[] {
    return cards.map((card) => {
      return (
        <tr key={card.id}>
          <td>{card.id}</td>
          <td>
            <CircleFill
              size={15}
              // я ненавижу css
              className={`${classes.statusIcon} ${getCardStatusColorClassName(
                card.status
              )}`}
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
    });
  }

  return (
    <table className={classes.table}>
      <thead className={classes.tableHead}>
        <tr>
          <th>
            <Search
              size={20}
              className={classes.searchIcon}
              onClick={onSearchIconClick}
            />
          </th>
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
        <SearchRow active={searchActive} />

        {cardsLoading ? (
          <tr className={"spinnerRow"}>
            <td colSpan={10}>
              <Spinner animation="border" role="status" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </td>
          </tr>
        ) : (
          renderBody(cards)
        )}
      </tbody>
    </table>
  );
}

function SearchRow({ active }: { active: boolean }) {
  function handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    // do nothing
  }

  return (
    <tr className={`searchRow ${(active && "active") || ""}`}>
      <td></td>
      <td></td>
      <td>
        <SearchRowInput name="date" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="time" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="address" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="reason" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="difficultyLevel" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="saved" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="damaged" onChange={handleChange} />
      </td>
      <td>
        <SearchRowInput name="rip" onChange={handleChange} />
      </td>
    </tr>
  );
}

function SearchRowInput({
  name,
  onChange,
}: {
  name: string;
  onChange: (event: React.SyntheticEvent) => void;
}) {
  const [value, setValue] = useState<string>("");

  function handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
    onChange(event);
  }

  return (
    <input
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      className={`${(value !== "" && "active") || ""}`}
    />
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
