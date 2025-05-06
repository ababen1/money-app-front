import type { ReactElement } from "react";
import type { Entry } from "../types/types";

interface EntryRowProps {
  data: Entry;
}

const EntryRow = (props: EntryRowProps): ReactElement => {
  return (
    <tr>
      <td>{props.data.date.toLocaleDateString()}</td>
      <td>{props.data.amount}</td>
      <td>{props.data.category}</td>
      <td>{props.data.description}</td>
    </tr>
  );
};

export default function Entries(list: Entry[]) {
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Description</th>
      </tr>
      {list.map((element, index) => {
        return <EntryRow key={index} data={element} />;
      })}
    </table>
  );
}
