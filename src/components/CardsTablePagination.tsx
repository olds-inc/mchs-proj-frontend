import React from "react";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    padding: "10px 20px",
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    cursor: "pointer",

    "&.active": {
      color: "#F2A45F",
    },
  },
  moveButton: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",

    "&:disabled": {
      color: "#5B5B5B",
    },
  },
});

export default function CardsTablePagination({
  activePageIndex,
  totalPages,
  onPageClick,
  onPreviousPageClick,
  onNextPageClick,
}: {
  activePageIndex: number;
  totalPages: number;
  onPageClick: (event: React.SyntheticEvent, pageIndex: number) => void;
  onPreviousPageClick: (event: React.SyntheticEvent) => void;
  onNextPageClick: (event: React.SyntheticEvent) => void;
}) {
  const classes = styles();

  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <button
          type="button"
          className={classes.moveButton}
          onClick={onPreviousPageClick}
          disabled={activePageIndex === 0}
        >
          Предыдущая:
        </button>
      </li>
      {[...Array(totalPages)].map((_, index) => {
        return (
          <li
            key={index}
            className={`${classes.listItem} ${
              activePageIndex === index && "active"
            }`}
            onClick={(e) => onPageClick(e, index)}
          >
            {index + 1}
          </li>
        );
      })}
      <li className={classes.listItem}>
        <button
          type="button"
          className={classes.moveButton}
          onClick={onNextPageClick}
          disabled={activePageIndex === totalPages - 1}
        >
          Следующая:
        </button>
      </li>
    </ul>
  );
}
