import React from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

// The <FormControl> component renders a form control with Bootstrap styling.
// The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state

export default function BetterCreateCardForm() {
  return (
    <Form className="my-3" method="POST">
      <Row className="mb-4">
        <Col>
          <Row className="my-3">
            <Col>
              <Form.Label htmlFor="address">Адрес</Form.Label>
              <Form.Control
                id="address"
                type="text"
                placeholder="г. Энгельс, ул. Маршала Василевского, д. 27, кв. 1"
                name="address"
                required={true}
              />
            </Col>
          </Row>
          <Row className="my-3">
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
                    required={true}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="89123456789"
                    name="phone_number"
                    required={true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-3">
            <Form.Group controlId="haracter_vyezda">
              <Form.Label>Характер выезда</Form.Label>
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
            </Form.Group>
          </Row>
          <Row className="my-3">
            <Col>
              <Row>
                <Col>
                  <Form.Label htmlFor="object">Объект</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <Form.Group controlId="object">
                    <Form.Control
                      id="object"
                      type="text"
                      placeholder="Квартира, домашние вещи"
                      name="object"
                      required={true}
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Control
                    id="razmer"
                    type="text"
                    placeholder="15"
                    name="object"
                    required={true}
                  />
                </Col>
                <Col md={2}>
                  <Form.Select name="metry" defaultValue={"m2"} id="metry">
                    <option value={"m2"}>м&sup2;</option>
                    <option value={""}>м&sup3;</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-3">
            <Form.Group controlId="nomer_vyzova">
              <Form.Label>Номер вызова</Form.Label>
              <Form.Select name="nomer_vyzova" defaultValue={"one-bis"}>
                <option value={"one"}>1</option>
                <option value={"one-bis"}>1-БИС</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Label htmlFor="privlekautsya">Привлекаются</Form.Label>
              <Form.Control
                id="privlekautsya"
                type="text"
                placeholder="271, 272, 975, 270, 141"
                name="privlekautsya"
                required={true}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="my-5">
            <Col>
              <Form.Group
                as={Row}
                className="mb-2"
                controlId="vremya_polucheniya_soohsheniya"
              >
                <Form.Label column md={9}>
                  Время получения сообщения (информации)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    type="time"
                    placeholder="10:00"
                    name="vremya_polucheniya_soohsheniya"
                    required={true}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2"
                controlId="data_polucheniya_soohsheniya"
              >
                <Form.Label column md={9}>
                  Дата получения сообщения (информации)
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    type="date"
                    placeholder="04.09.2022"
                    name="data_polucheniya_soohsheniya"
                    required={true}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="vremya_vyezda">
                <Form.Label column md={9} className="text-secondary">
                  Время выезда
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    type="time"
                    placeholder="10:00"
                    name="vremya_vyezda"
                    required={true}
                    disabled={true}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-2"
                controlId="vremya_pribytiya_k_mestu_vyzova"
              >
                <Form.Label column md={9} className="text-secondary">
                  Время прибытия к месту вызова
                </Form.Label>
                <Col md={3}>
                  <Form.Control
                    type="time"
                    placeholder="10:00"
                    name="vremya_pribytiya_k_mestu_vyzova"
                    required={true}
                    disabled={true}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Сохранить
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
