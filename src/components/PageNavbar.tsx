import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import {
  Star,
  BarChart,
  CalendarWeek,
  Truck,
  FileEarmarkText,
  Files,
  Map,
} from "react-bootstrap-icons";

export default function PageNavbar() {
  return (
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
        <Nav.Link className="d-flex align-items-center px-3 py-2" href="#duty">
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
  );
}
