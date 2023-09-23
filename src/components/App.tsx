import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

import { CurrentUser, ErrorMessage } from "../types";

import { FAKE_USER_EMAIL, FAKE_USER_PASS } from "../constants";

import AuthService from "../services/auth";

import { extractErrorPayload } from "../utils";

import { CurrentUserContext } from "../contexts/CurrentUser";
import { ErrorBoundaryContext } from "../contexts/ErrorBoundary";

import AlertWithError from "./AlertWithError";
import CreateCardForm from "./CreateCardForm";
import PageNavbar from "./PageNavbar";
import TablichkaEbanaya from "./TablichkaEbanaya";
import CustomModalDialog from "./CustomModalDialog";

export default function App() {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [modalShown, setModalShown] = useState<boolean>(false);

  function handleModalClose() {
    setModalShown(false);
  }

  function handleModalShow() {
    setModalShown(true);
  }

  // todo: реакт генерит 2 запроса при рендерах, чтобы от этого избавиться нужно подключать модную либу
  // но пока на этой похуй т.к. в стейт кладется результат последнгео запроса
  useEffect(() => {
    if (currentUser === null) {
      AuthService.loginUser({
        email: FAKE_USER_EMAIL,
        password: FAKE_USER_PASS,
      })
        .then((user) => {
          setCurrentUser({
            email: user.email,
            // todo: хранить такую информацию в стейте нельзя, но на это сейчас вообще поебать
            // по-хорошему токены нужно положит хотя бы в локал сторадж и доставать оттуда в момент реквестов
            tokens: {
              accessToken: user.tokens.accessToken,
              refreshToken: user.tokens.refreshToken,
            },
          });
        })
        .catch((error) => {
          setErrorMessage(extractErrorPayload(error));
        });
    }
  }, [currentUser]);

  return (
    <>
      <ErrorBoundaryContext.Provider value={errorMessage}>
        <CurrentUserContext.Provider value={currentUser}>
          {errorMessage ? (
            <Container>
              <AlertWithError
                message={errorMessage.message}
                details={errorMessage.details}
              />
            </Container>
          ) : (
            <>
              <PageNavbar />
              <Container className="mt-5" fluid={true}>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <TablichkaEbanaya />
                      </Col>
                    </Row>
                    <Row>
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
                    </Row>
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
                <CreateCardForm onClose={handleModalClose} />
              </Modal>
            </>
          )}
        </CurrentUserContext.Provider>
      </ErrorBoundaryContext.Provider>
    </>
  );
}
