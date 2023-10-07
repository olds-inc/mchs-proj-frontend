import React, { useState, useContext } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

import CardsWorkboard from "../components/CardsWorkboard";
import WeatherWidget from "../components/WeatherWidget";
import CustomModalDialog from "../components/CustomModalDialog";
import CreateCardForm from "../components/CreateCardForm";

export default function ReactionPage() {
  const [modalShown, setModalShown] = useState<boolean>(false);

  function handleModalClose() {
    setModalShown(false);
  }

  function handleModalShow() {
    setModalShown(true);
  }

  return (
    <>
      <Container className="mt-5 px-5" fluid={true}>
        <Row>
          <Col md={10}>
            <CardsWorkboard />
          </Col>
          <Col md={2} className="px-5">
            <WeatherWidget />
          </Col>
        </Row>
      </Container>
    </>
  );

  return (
    <>
      <Container className="mt-5" fluid={true}>
        <Row>
          <Col>
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
      {/* 
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
      </Modal> */}
    </>
  );
}
