import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Table } from "react-bootstrap";
import {
  CircleFill,
  PlusLg,
  GeoAlt,
  Wind,
  BrightnessHigh,
} from "react-bootstrap-icons";

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

export default function App() {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [modalShown, setModalShown] = useState(false);

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
                  <Col md={10}>
                    <Row>
                      <Col>
                        <Table className="text-center">
                          <thead>
                            <tr>
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
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center align-items-start">
                        <Button
                          size="lg"
                          variant="danger"
                          className="rounded-circle bg-danger p-4"
                          onClick={handleModalShow}
                        >
                          <PlusLg className="text-light" size={30} />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={2} className="position-relative">
                    <Row>
                      <Col>
                        <div className="rounded-4 bg-dark text-light mx-5 mb-5 p-4 d-flex flex-column justify-content-center align-items-start">
                          <p className="mb-1">04.09.2022</p>
                          <p className="mb-1">20:05:10</p>
                          <p className="mb-1">
                            <GeoAlt size={20} className="me-2 text-secondary" />
                            Энгельс
                          </p>
                          <p className="mb-1">
                            <BrightnessHigh
                              size={20}
                              className="me-2 text-warning"
                            />
                            Ясно
                          </p>
                          <p className="mb-0">
                            <Wind size={20} className="me-2 text-info" />1 м/с
                          </p>
                        </div>

                        <div className="rounded-4 bg-dark text-light mx-5 p-4 d-flex flex-column justify-content-center align-items-start">
                          <p className="mb-3">
                            <span className="me-4 text-danger">1</span>
                            Реагирование
                          </p>
                          <p className="mb-3">
                            <span className="me-4 text-warning">1</span>В
                            процессе
                          </p>
                          <p className="mb-0">
                            <span className="me-4 text-success">14</span>
                            Завершено
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>

              <Modal
                show={modalShown}
                centered
                onHide={handleModalClose}
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Создание карточки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CreateCardForm onClose={handleModalClose} />
                </Modal.Body>
              </Modal>
            </>
          )}
        </CurrentUserContext.Provider>
      </ErrorBoundaryContext.Provider>
    </>
  );
}
