import type { Entry } from "@src/types/types";
import { useState } from "react";
import { Button, Col, Form, Modal, ModalHeader, Row } from "react-bootstrap";

interface Props {
  modalOpen: boolean;
  setModalOpen: (val: boolean) => void;
  onSubmit: (newEntry: Omit<Entry, "id">) => void;
}

export default function NewEntryForm(props: Props) {
  const [newEntry, setNewEntry] = useState<Omit<Entry, "id">>({
    amount: 0,
    category: 0,
    date: new Date(),
    description: "",
    isExpense: true,
  });

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
                value={newEntry.amount}
                onChange={(e) => {
                  setNewEntry({
                    ...newEntry,
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
                  setNewEntry({
                    ...newEntry,
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
            value={newEntry.description}
            onChange={(e) =>
              setNewEntry({
                ...newEntry,
                description: e.target.value,
              })
            }
          ></Form.Control>
          <br />

          <Button
            variant="primary"
            onClick={(_e) => {
              props.onSubmit(newEntry);
              props.setModalOpen(false);
            }}
          >
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
