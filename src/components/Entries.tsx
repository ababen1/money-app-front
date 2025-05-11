import type { ReactElement } from "react";
import type { Entry } from "../types/types";
import Table from "react-bootstrap/Table";

interface EntryRowProps {
  data: Entry;
}

interface Props {
  list: Entry[];
  setList: (val: Entry[]) => void;
}

const EntryRow = (props: EntryRowProps): ReactElement => {
  return (
    <tr>
      <td>{new Date(props.data.date).toLocaleDateString()}</td>
      <td>{props.data.amount}</td>
      <td>{props.data.category}</td>
      <td>{props.data.description}</td>
    </tr>
  );
};

export default function Entries(props: Props) {
  return (
    <Table responsive style={{ width: "100%", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.list.length > 0
          ? props.list.map((element, index) => {
              return <EntryRow key={index} data={element} />;
            })
          : ""}
      </tbody>
    </Table>
  );
}
