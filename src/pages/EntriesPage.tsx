import { Button, Col, Container, Row } from "react-bootstrap";
import Entries from "@src/components/Entries";
import type { Entry } from "@src/types/types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import NewEntryForm from "@src/components/NewEntryForm";
import WalletContext from "@src/context/WalletContext";
import { addEntry } from "@src/api/wallet-api";

export default function EntriesPage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { wallet, setWallet } = useContext(WalletContext);

  const onSubmit = async (newEntry: Omit<Entry, "id">) => {
    const result = await addEntry(newEntry);
    console.log(result);
  };

  return (
    <Container fluid>
      <NewEntryForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        onSubmit={onSubmit}
      />
      <Row>
        <Col>
          <Button color="primary" onClick={(_e) => setModalOpen(true)}>
            Add Entry
          </Button>
        </Col>
      </Row>

      <Entries list={wallet} setList={setWallet} />
    </Container>
  );
}
