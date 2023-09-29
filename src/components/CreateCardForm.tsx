import React, { useContext, useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import {
  CurrentUser,
  ErrorMessage,
  DifficultyLevel,
  SizeUnits,
} from "../types";

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

    const realReason =
      form["reason"].value === "other" ? form["reason_text"].value : "ne other";

    const timeOfCallTime = form["time_of_call_time"].value;
    const timeOfCallDate = form["time_of_call_date"].value;

    cardService
      .addCard({
        address: form["address"].value,
        applicant: form["applicant"].value,
        phone_number: form["phone_number"].value,
        status: -1,
        reason: realReason,
        place_description: form["place_description"].value,
        size: form["size"].value,
        size_units: form["size_units"].value,
        time_of_call: Date.parse(`${timeOfCallDate} ${timeOfCallTime}`),
        difficulty_level: form["difficulty_level"].value,
        squad_numbers: form["squad_numbers"].value
          .split(", ")
          .map((str: string) => parseInt(str)),
      })
      .then(() => {
        setCardSuccessfullyCreated(true);
      })
      .catch((error) => {
        setErrorMessage(extractErrorPayload(error));
      });
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
                    value="г. Энгельс, ул. Маршала Василевского, д. 27, кв. 1"
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
                        value="Иванов И.И."
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        id="phone_number"
                        type="tel"
                        placeholder="+79123456789"
                        name="phone_number"
                        value="+79123456789"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Label
                    htmlFor="reason"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Характер выезда
                  </Form.Label>
                  <Form.Select name="reason" defaultValue={"other"} id="reason">
                    <option value={""}>Пожар</option>
                    <option value={""}>ЧС</option>
                    <option value={""}>Заправка ГСМ</option>
                    <option value={""}>Горение сухой травы, мусора</option>
                    <option value={"other"}>Прочее</option>
                  </Form.Select>
                  {/* todo: render only if other selected above */}
                  <Form.Control
                    id="reason_text"
                    type="text"
                    placeholder="Ввод прочего"
                    name="reason_text"
                    value="Ввод прочего"
                  />
                </Col>
              </Row>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  htmlFor="place_description"
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
                        id="place_description"
                        type="text"
                        name="place_description"
                        placeholder="Квартира, домашние вещи"
                        value="Квартира, домашние вещи"
                      />
                    </Col>
                    <Col md={6}>
                      <div className="d-flex">
                        <Col md={4}>
                          <Form.Control
                            id="size"
                            className="text-center"
                            type="text"
                            name="size"
                            placeholder="15"
                            value="15"
                          />
                        </Col>
                        <Col md={4}>
                          <Form.Select
                            name="size_units"
                            defaultValue={"m2"}
                            id="size_units"
                          >
                            <option value={SizeUnits.METER}>м&sup2;</option>
                            <option value={SizeUnits.HECTARE}>га&sup3;</option>
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
                    htmlFor="difficulty_level"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Номер вызова
                  </Form.Label>
                  <Form.Select
                    name="difficulty_level"
                    defaultValue={DifficultyLevel.ONE_BIS}
                    id="difficulty_level"
                  >
                    <option value={DifficultyLevel.ONE}>1</option>
                    <option value={DifficultyLevel.ONE_BIS}>1-БИС</option>
                    <option value={DifficultyLevel.TWO}>2</option>
                    <option value={DifficultyLevel.THREE}>3</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Label
                    htmlFor="squad_numbers"
                    style={{
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    Привлекались
                  </Form.Label>
                  <Form.Control
                    id="squad_numbers"
                    type="text"
                    placeholder="271, 272, 975, 270, 141"
                    name="squad_numbers"
                    autoComplete="off"
                    value="271, 272, 975, 270, 141"
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label
                  column
                  md={9}
                  htmlFor="time_of_call_time"
                  style={{
                    color: "rgba(38, 45, 61, 1)",
                    fontWeight: "500",
                  }}
                >
                  Время получения сообщения (информации)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="time_of_call_time"
                    className="text-center"
                    type="text"
                    placeholder="10:00"
                    name="time_of_call_time"
                    value="10:00"
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
                  htmlFor="time_of_call_date"
                  style={{
                    color: "rgba(38, 45, 61, 1)",
                    fontWeight: "500",
                  }}
                >
                  Дата получения сообщения (информации)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    id="time_of_call_date"
                    className="text-center"
                    type="text"
                    placeholder="04.09.2022"
                    name="time_of_call_date"
                    value="04.09.2022"
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
