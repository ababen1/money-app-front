import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Entries from "./components/Entries";
import type { Entry } from "./types/types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NewEntryForm from "./components/NewEntryForm";

const tempList: Entry[] = [
  {
    id: 0,
    amount: 100,
    category: 0,
    date: new Date(),
    description: "income",
    isExpense: false,
  },
];

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newEntry, setNewEntry] = useState<Omit<Entry, "id">>({
    amount: 0,
    category: 0,
    date: new Date(),
    description: "",
    isExpense: true,
  });

  return (
    <Container fluid>
      <NewEntryForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        entryData={newEntry}
        setEntryData={setNewEntry}
      />
      <Row>
        <Col>
          <Button color="primary" onClick={(_e) => setModalOpen(true)}>
            Add Entry
          </Button>
        </Col>
      </Row>

      <Entries list={tempList} />
    </Container>
  );
}

export default App;
