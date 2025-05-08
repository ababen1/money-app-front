import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Entries from "./components/Entries";
import type { Entry } from "./types/types";
import "bootstrap/dist/css/bootstrap.min.css";

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
  return (
    <Container fluid>
      <Row>
        <Col>
          <Button color="primary">Add Entry</Button>
        </Col>
      </Row>

      <Entries list={tempList} />
    </Container>
  );
}

export default App;
