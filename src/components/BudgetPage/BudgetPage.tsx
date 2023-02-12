import { FC } from "react";
import "./BudgetPage.scss";

// Components
import { Category } from "../Category/Category";

interface IBudgetPageProps {
  activeBudget: string | null;
}

export const BudgetPage: FC<IBudgetPageProps> = ({ activeBudget }) => {
  return (
    <div className="BudgetPage">
      <div className="page-wrapper">
        {activeBudget ? (
          <>
            <Category
              category_name="Income"
              budget_items={[
                { label: "Salary", value: 6353.85 },
                { label: "Disability", value: 165 },
              ]}
              type="income"
            />
            <Category
              category_name="Housing"
              budget_items={[
                { label: "Rent", value: 1300 },
                { label: "Electric", value: 200 },
              ]}
            />
          </>
        ) : (
          <button className="btn-primary">+ Create Budget</button>
        )}
      </div>
    </div>
  );
};
