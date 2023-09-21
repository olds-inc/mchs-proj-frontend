import React, { useContext, useRef, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";

import { CurrentUser, ErrorMessage } from "../types";

import CardService from "../services/card";

import { extractErrorPayload } from "../utils";

import { CurrentUserContext } from "../contexts/CurrentUser";

import AlertWithError from "./AlertWithError";

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

    cardService
      .addCard({
        address: form["address"].value,
        comment: "fake", // todo: remove
        applicant: form["applicant"].value,
        phone_number: form["phone_number"].value,
        copies: 1, // todo: remove
      })
      .then((cardId) => {
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
            {/* 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string; */}
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
              <Row>
                <Col>
                  <Form.Label htmlFor="address">Адрес</Form.Label>
                  <Form.Control
                    id="address"
                    type="text"
                    placeholder="г. Энгельс, ул. Маршала Василевского, д. 27, кв. 1"
                    name="address"
                    autoComplete="off"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Form.Label htmlFor="applicant">Заявитель</Form.Label>
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
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant={"success"} type={"submit"} className="mt-3">
                Сохранить
              </Button>
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
