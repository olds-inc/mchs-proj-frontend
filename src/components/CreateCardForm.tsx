import React, { useContext, useRef, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

import { CurrentUser, ErrorMessage } from "../types";

import CardService from "../services/card";

import { extractErrorPayload } from "../utils";

import { CurrentUserContext } from "../contexts/CurrentUser";

import AlertWithError from "./AlertWithError";

// страшно представить ебало рефакторинга и как выделять эту верстку в отдельные компоненты

export default function CreateCardForm({ onClose }: { onClose: () => void }) {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const [cardSuccessfullyCreated, setCardSuccessfullyCreated] =
    useState<boolean>(false);

  const formRef = useRef(null);
  const currentUser = useContext<CurrentUser | null>(CurrentUserContext);

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    setErrorMessage(null);

    const form = formRef.current;

    const cardService = new CardService(currentUser?.tokens?.accessToken);

    // cardService
    //   .addCard({
    //     address: form["address"].value,
    //     comment: "fake", // todo: remove
    //     applicant: form["applicant"].value,
    //     phone_number: form["phone_number"].value,
    //     copies: 1, // todo: remove
    //   })
    //   .then(() => {
    //     setCardSuccessfullyCreated(true);
    //   })
    //   .catch((error) => {
    //     setErrorMessage(extractErrorPayload(error));
    //   });

    setCardSuccessfullyCreated(true);
  }

  return (
    <>
      {!!cardSuccessfullyCreated ? (
        <>
          <div>
            <h3>Карточка создана успешно</h3>
            <Button
              variant={"secondary"}
              type={"submit"}
              className="mt-3"
              onClick={onClose}
            >
              Закрыть окно
            </Button>
          </div>
        </>
      ) : (
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Row>
            <Col>
              <Row className="mb-4">
                <Col>
                  <Form.Label
                    htmlFor="address"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Адрес
                  </Form.Label>
                  <Form.Control
                    id="address"
                    type="text"
                    placeholder="г. Энгельс, ул. Маршала Василевского, д. 27, кв. 1"
                    name="address"
                    autoComplete="off"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Row>
                    <Form.Label
                      htmlFor="applicant"
                      style={{
                        fontWeight: 600,
                        fontSize: "20px",
                      }}
                    >
                      Заявитель
                    </Form.Label>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        id="applicant"
                        type="text"
                        placeholder="Иванов И.И."
                        name="applicant"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        id="phone_number"
                        type="tel"
                        placeholder="+79123456789"
                        name="phone_number"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Label
                    htmlFor="qweasd"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Характер выезда
                  </Form.Label>
                  <Form.Select
                    name="haracter_vyezda"
                    defaultValue={"other"}
                    id="haracter_vyezda"
                  >
                    <option value={""}>Пожар</option>
                    <option value={""}>ЧС</option>
                    <option value={""}>Заправка ГСМ</option>
                    <option value={""}>Горение сухой травы, мусора</option>
                    <option value={"other"}>Прочее</option>
                  </Form.Select>
                  <Form.Control
                    id="haracter_vyezda_text"
                    type="text"
                    placeholder="Ввод прочего"
                    name="haracter_vyezda_text"
                  />
                </Col>
              </Row>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  htmlFor="address"
                  column
                  md={12}
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  Объект
                </Form.Label>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        id="pogiblo"
                        type="text"
                        name="fake_name_2"
                        placeholder="Квартира, домашние вещи"
                      />
                    </Col>
                    <Col md={6}>
                      <div className="d-flex">
                        <Col md={4}>
                          <Form.Control
                            id="pogiblo"
                            className="text-center"
                            type="text"
                            name="fake_name_2"
                            placeholder="15"
                          />
                        </Col>
                        <Col md={4}>
                          <Form.Select
                            name="haracter_vyezda"
                            defaultValue={"m2"}
                            id="haracter_vyezda"
                          >
                            <option value={"m2"}>м&sup2;</option>
                            <option value={"ha2"}>га&sup3;</option>
                          </Form.Select>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
              <Row className="mb-4">
                <Col>
                  <Form.Label
                    htmlFor="qweasd"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Номер вызова
                  </Form.Label>
                  <Form.Select
                    name="haracter_vyezda"
                    defaultValue={"1bis"}
                    id="haracter_vyezda"
                  >
                    <option value={"1"}>1</option>
                    <option value={"1bis"}>1-БИС</option>
                    <option value={"gsm"}>2</option>
                    <option value={"trava"}>3</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Label
                    htmlFor="address"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Привлекались
                  </Form.Label>
                  <Form.Control
                    id="address"
                    type="text"
                    placeholder="271, 272, 975, 270, 141"
                    name="address"
                    autoComplete="off"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_1"
                  style={{
                    color: "rgba(38, 45, 61, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время получения сообщения (информации)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_1"
                    className="text-center"
                    type="text"
                    placeholder="10:00"
                    name="qwer_1"
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(38, 45, 61, 1)",
                    fontWeight: "500",
                  }}
                >
                  Дата получения сообщения (информации)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    placeholder="04.09.2022"
                    name="fake_name_1"
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время выезда
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время прибытия к месту вызова
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время подачи первого ствола
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время локализации
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время ликвидации открытого горения
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время ликвидации
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="qwer_2"
                  style={{
                    color: "rgba(196, 196, 196, 1)",
                  }}
                >
                  Время возвращения караулов (отделений)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="qwer_2"
                    className="text-center"
                    type="text"
                    name="fake_name_1"
                    disabled={true}
                    style={{
                      fontSize: "15px",
                    }}
                  />
                </Col>
              </Form.Group>
              <Row>
                <Col md={8}>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label
                      column
                      md={5}
                      htmlFor="pogiblo"
                      style={{
                        color: "rgba(196, 196, 196, 1)",
                      }}
                    >
                      Погибло
                    </Form.Label>
                    <Col md={7} className="d-flex">
                      <Form.Control
                        id="pogiblo"
                        className="text-center mx-3"
                        type="text"
                        name="fake_name_2"
                        disabled={true}
                      />
                      <Form.Control
                        id="pogiblo_unit"
                        className="text-center"
                        value="чел."
                        disabled={true}
                        readOnly={true}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label
                      column
                      md={5}
                      htmlFor="postradalo"
                      style={{
                        color: "rgba(196, 196, 196, 1)",
                      }}
                    >
                      Пострадало
                    </Form.Label>
                    <Col md={7} className="d-flex">
                      <Form.Control
                        id="postradalo"
                        className="text-center mx-3"
                        type="text"
                        name="fake_name_2"
                        disabled={true}
                      />
                      <Form.Control
                        id="postgradalo_unit"
                        className="text-center"
                        value="чел."
                        disabled={true}
                        readOnly={true}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label
                      column
                      md={5}
                      htmlFor="spaseno"
                      style={{
                        color: "rgba(196, 196, 196, 1)",
                      }}
                    >
                      Спасено
                    </Form.Label>
                    <Col md={7} className="d-flex">
                      <Form.Control
                        id="spaseno"
                        className="text-center mx-3"
                        type="text"
                        name="fake_name_2"
                        disabled={true}
                      />
                      <Form.Control
                        id="spaseno_unit"
                        className="text-center"
                        value="чел."
                        disabled={true}
                        readOnly={true}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col
                  md={4}
                  className="d-flex flex-column justify-content-center px-4"
                >
                  <Button
                    variant={"secondary"}
                    type={"button"}
                    className="mt-3"
                  >
                    Путевка
                  </Button>
                  <Button variant={"success"} type={"submit"} className="mt-3">
                    Сохранить
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      )}

      {errorMessage && (
        <AlertWithError
          message={errorMessage.message}
          details={errorMessage.details}
        />
      )}
    </>
  );
}
