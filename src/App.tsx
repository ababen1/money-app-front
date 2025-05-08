import { Tab, Tabs } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EntriesPage from "./pages/EntriesPage";

function App() {
  return (
    <Tabs defaultActiveKey="wallet">
      <Tab eventKey="wallet" title="My Wallet">
        <EntriesPage />
      </Tab>
      <Tab eventKey="stats" title="Statistics"></Tab>
    </Tabs>
  );
}

export default App;
