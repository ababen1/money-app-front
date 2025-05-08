import type { Entry } from "@src/types/types";
import { Button, Col, Form, Modal, ModalHeader, Row } from "react-bootstrap";

interface Props {
  modalOpen: boolean;
  setModalOpen: (val: boolean) => void;
  entryData: Omit<Entry, "id">;
  setEntryData: (val: Omit<Entry, "id">) => void;
}

export default function NewEntryForm(props: Props) {
  return (
    <Modal
      show={props.modalOpen}
      onHide={() => {
        props.setModalOpen(false);
      }}
    >
      <ModalHeader>Add</ModalHeader>
      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Is expense
            </Form.Label>
            <Col style={{ alignContent: "center" }}>
              <Form.Check></Form.Check>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Amount
            </Form.Label>
            <Col>
              <Form.Control
                type="number"
                value={props.entryData.amount}
                onChange={(e) => {
                  props.setEntryData({
                    ...props.entryData,
                    amount: parseFloat(e.target.value),
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Group>
          <br />

          <Form.Group as={Row}>
            <Form.Label column sm="3">
              Category
            </Form.Label>
            <Col>
              <Form.Select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  props.setEntryData({
                    ...props.entryData,
                    category: parseInt(e.target.value),
                  })
                }
              >
                <option value={0}>0</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <br />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={props.entryData.description}
            onChange={(e) =>
              props.setEntryData({
                ...props.entryData,
                description: e.target.value,
              })
            }
          ></Form.Control>
          <br />

          <Button type="submit">Save</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
