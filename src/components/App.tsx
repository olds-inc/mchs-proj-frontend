import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import {
  Star,
  BarChart,
  CalendarWeek,
  Truck,
  FileEarmarkText,
  Files,
  Map,
  CircleFill,
  GeoAlt,
  BrightnessHigh,
  Wind,
  PlusLg,
} from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Nav
          variant="pills"
          className="w-100 d-flex justify-content-around align-items-center"
        >
          <Nav.Link
            className="d-flex align-items-center px-3 py-2 px-3 py-2"
            href="#home"
          >
            <Star className="me-2" size={24} />
            Реагирование
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-3 py-2"
            href="#stitistics"
          >
            <BarChart className="me-2" size={24} />
            Статистика
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-3 py-2"
            href="#duty"
          >
            <CalendarWeek className="me-2" size={24} />
            Служба
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-3 py-2"
            href="#vehicle"
          >
            <Truck className="me-2" size={24} />
            Техника
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-3 py-2"
            href="#documents"
          >
            <FileEarmarkText className="me-2" size={24} />
            Документы
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-3 py-2"
            href="#planning"
          >
            <Files className="me-2" size={24} />
            Планирование
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center px-3 py-2" href="#map">
            <Map className="me-2" size={24} />
            Карта
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-5" fluid={true}>
        <Row>
          <Col md={10}>
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
                <tr>
                  <td>
                    <CircleFill size={15} className="text-warning" />
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
                <tr>
                  <td>
                    <CircleFill size={15} className="text-success" />
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
            <Pagination className="d-flex justify-content-end align-items-center">
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Ellipsis disabled />
              <Pagination.Item>10</Pagination.Item>
              <Pagination.Item>Далее</Pagination.Item>
            </Pagination>
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
                    <BrightnessHigh size={20} className="me-2 text-warning" />
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
                    <span className="me-4 text-warning">1</span>В процессе
                  </p>
                  <p className="mb-0">
                    <span className="me-4 text-success">14</span>
                    Завершено
                  </p>
                </div>
              </Col>
            </Row>
            <div className="position-absolute start-50 bottom-0 mb-5 ">
              <Button
                size="lg"
                variant=""
                className="rounded-circle bg-danger p-4"
                onClick={handleShow}
              >
                <PlusLg className="text-light" size={40} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} centered onHide={handleClose} size="xl">
        <Modal.Header
          closeButton
          closeVariant={"white"}
          className={"bg-danger"}
        >
          <Modal.Title className="text-light">Создание карточки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Адрес</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Заявитель</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Номер</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Характер выезда</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">Пожар</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Объект</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <Form.Group
                            className="mb-2"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Я</Form.Label>
                            <Form.Control type="text" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            className="mb-2"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Ебал</Form.Label>
                            <Form.Select aria-label="Default select example">
                              <option value="1">м2</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Номер вызова</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">1</option>
                          <option value="2">1-БИС</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Привлекаются</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время получения сообщения (информации)
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Дата получения сообщения (информации)
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Дата получения сообщения (информации)
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время выезда
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время прибытия к месту вызова
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время подачи первого ствола
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время локализации
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время ликвидации открытого горения
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время ликвидации
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={8}>
                      Время возвращения караулов (отделений)
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control type="email" placeholder="Email" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end align-items-center">
                  <Button variant="secondary" className="mx-4 px-3">
                    Путевка
                  </Button>
                  <Button variant="success" className="mx-4 px-3">
                    Сохранить
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
