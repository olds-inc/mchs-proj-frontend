import React, { useState, useContext, useEffect, useReducer } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

import { CurrentUser, CardModel } from "../types";

import { CurrentUserContext } from "../contexts/CurrentUser";

import CardService from "../services/card";

import cardsReducer, { CardsReducerActionType } from "../reducers/cards";

import CardsWorkboard from "../components/CardsWorkboard";
import CardsTable from "../components/CardsTable";
import CustomModalDialog from "../components/CustomModalDialog";
import CreateCardForm from "../components/CreateCardForm";

export default function ReactionPage() {
  const [modalShown, setModalShown] = useState<boolean>(false);
  const [cardsLoading, setCardsLoading] = useState<boolean>(true);
  const [state, dispatch] = useReducer(cardsReducer, { cards: [], total: 0 });
  const [pagesCount, setPagesCount] = useState(0);

  const CARDS_PER_PAGE = 10;

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentUser = useContext<CurrentUser | null>(CurrentUserContext);

  function handleModalClose() {
    setModalShown(false);
  }

  function handleModalShow() {
    setModalShown(true);
  }

  function handleCreateCard(card: CardModel) {
    const cardService = new CardService(currentUser.tokens.accessToken);

    cardService
      .createCard(card)
      .then((cardId) => {
        dispatch({
          type: CardsReducerActionType.ADD,
          state: {
            cards: [
              {
                ...card,
                id: cardId,
              },
            ],
          },
        });
      })
      .finally(() => {
        setCardsLoading(true);
        setModalShown(false);
      });
  }

  function handleLoadMore() {
    setCardsLoading(false);

    new CardService("")
      .readAllCards(currentPageIndex * CARDS_PER_PAGE, CARDS_PER_PAGE)
      .then((response) => {
        dispatch({
          type: CardsReducerActionType.LOADED,
          state: {
            cards: response.cards,
            total: response.total,
          },
        });
      })
      .finally(() => {
        setCurrentPageIndex(currentPageIndex + 1);
        setCardsLoading(false);
      });
  }

  useEffect(() => {
    if (cardsLoading) {
      new CardService("")
        .readAllCards(currentPageIndex * CARDS_PER_PAGE, CARDS_PER_PAGE)
        .then((response) => {
          dispatch({
            type: CardsReducerActionType.LOADED,
            state: {
              cards: response.cards,
              total: response.total,
            },
          });
        })
        .finally(() => {
          setCardsLoading(false);
          setPagesCount(state.total / CARDS_PER_PAGE);
        });
    }
  }, []);

  return (
    <>
      <Container className="mt-5" fluid={true}>
        <CardsWorkboard />
      </Container>
    </>
  );

  return (
    <>
      <Container className="mt-5" fluid={true}>
        <Row>
          <Col>
            <Row>
              <Col md={10}>
                <CardsTable cards={state.cards} />
              </Col>
              <Col md={2} className="px-5">
                <div
                  style={{
                    width: "100%",
                    height: "215px",
                    background: "#24263A",
                    borderRadius: 20,
                  }}
                />
              </Col>
            </Row>
            {/* <Row>
              <Col className="d-flex justify-content-center align-items-start">
                <Button
                  size="lg"
                  variant="danger"
                  className="rounded-circle bg-danger p-4 mx-3"
                  onClick={() => handleModalShow()}
                >
                  <PlusLg className="text-light" size={30} />
                </Button>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>

      <Modal
        show={modalShown}
        size="xl"
        backdrop={"static"}
        onCloseClick={handleModalClose}
        title="Создание карточки"
        backgroundColor="rgba(211, 67, 77, 1)"
        dialogAs={CustomModalDialog}
      >
        <CreateCardForm onCreateCard={handleCreateCard} />
      </Modal>
    </>
  );
}
