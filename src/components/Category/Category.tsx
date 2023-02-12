import { FC } from "react";
import "./Category.scss";

// Components
import { BudgetItem } from "../BudgetItem/BudgetItem";

// Types
import ICategory from "./Category.types";

export const Category: FC<ICategory> = ({ category_name, budget_items }) => {
  // Sum all values in budget_items array
  const total: number = budget_items
    .map((item) => item.value)
    .reduce((prev, curr) => prev + curr);

  return (
    <div className="Category">
      <div className="page-wrapper">
        <div className="table-wrapper">
          <table>
            <tr>
              <th colSpan={2}>{category_name}</th>
            </tr>
            {budget_items.map((item) => {
              return <BudgetItem label={item.label} value={item.value} />;
            })}
            <BudgetItem label="Total" value={total} />
          </table>
        </div>
      </div>
    </div>
  );
};
