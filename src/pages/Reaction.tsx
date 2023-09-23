import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

import TablichkaEbanaya from "../components/TablichkaEbanaya";
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
  );
}
