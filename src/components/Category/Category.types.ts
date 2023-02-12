import IBudgetItem from "../BudgetItem/BudgetItem.types";

export default interface ICategory {
  category_name: string;
  budget_items: IBudgetItem[];
  type?: "income" | "expense";
}
