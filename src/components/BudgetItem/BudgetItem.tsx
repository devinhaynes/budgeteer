import { FC } from "react";
import "./BudgetItem.scss";
import IBudgetItem from "./BudgetItem.types";

const numberFormat = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const BudgetItem: FC<IBudgetItem> = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{numberFormat(value)}</td>
    </tr>
  );
};
