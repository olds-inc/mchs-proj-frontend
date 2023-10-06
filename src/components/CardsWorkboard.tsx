import React, { useEffect, useState } from "react";

import { Row, Col, Spinner } from "react-bootstrap";

import CardService from "../services/card";

import CardsTable from "./CardsTable";
import CardsTablePagination from "./CardsTablePagination";
import { CardModel } from "../types";

const CARDS_PER_PAGE = 5;

export default function CardsWorkboard() {
  const [cardsLoading, setCardsLoading] = useState<boolean>(true);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const [cards, setCards] = useState<CardModel[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  function handlePreviousPageButtonClick(event: React.SyntheticEvent) {
    const nextPageIndex = currentPageIndex - 1;

    setCurrentPageIndex(Math.max(0, nextPageIndex));
    setCardsLoading(true);

    new CardService("")
      .readAllCards(nextPageIndex * CARDS_PER_PAGE, CARDS_PER_PAGE)
      .then(({ cards, total }) => {
        setCards(cards);
        setTotalPages(Math.ceil(total / CARDS_PER_PAGE));
      })
      .finally(() => {
        setCardsLoading(false);
      });
  }

  function handleNextPageButtonClick(event: React.SyntheticEvent) {
    const nextPageIndex = currentPageIndex + 1;

    setCurrentPageIndex(Math.min(totalPages, nextPageIndex));
    setCardsLoading(true);

    new CardService("")
      .readAllCards(nextPageIndex * CARDS_PER_PAGE, CARDS_PER_PAGE)
      .then(({ cards, total }) => {
        setCards(cards);
        setTotalPages(Math.ceil(total / CARDS_PER_PAGE));
      })
      .finally(() => {
        setCardsLoading(false);
      });
  }

  function handlePageItemClick(event: React.SyntheticEvent, pageIndex: number) {
    setCurrentPageIndex(pageIndex);
    setCardsLoading(true);

    new CardService("")
      .readAllCards(pageIndex * CARDS_PER_PAGE, CARDS_PER_PAGE)
      .then(({ cards, total }) => {
        setCards(cards);
        setTotalPages(Math.ceil(total / CARDS_PER_PAGE));
      })
      .finally(() => {
        setCardsLoading(false);
      });
  }

  useEffect(() => {
    if (cardsLoading) {
      new CardService("")
        .readAllCards(currentPageIndex * CARDS_PER_PAGE, CARDS_PER_PAGE)
        .then(({ cards, total }) => {
          setCards(cards);
          setTotalPages(Math.ceil(total / CARDS_PER_PAGE));
        })
        .finally(() => {
          setCardsLoading(false);
        });
    }
  }, [cards, cardsLoading]);

  return cardsLoading ? (
    <Row>
      <Col>
        <Spinner animation="border" role="status" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  ) : (
    <>
      <Row>
        <Col>
          <CardsTable cards={cards} />
        </Col>
      </Row>
      <Row className={"mb-4"}>
        <Col className="d-flex justify-content-end align-items-center">
          <CardsTablePagination
            activePageIndex={currentPageIndex}
            totalPages={totalPages}
            onPreviousPageClick={handlePreviousPageButtonClick}
            onNextPageClick={handleNextPageButtonClick}
            onPageClick={handlePageItemClick}
          />
        </Col>
      </Row>
    </>
  );
}
