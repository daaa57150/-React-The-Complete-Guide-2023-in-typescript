import { Expense } from "../models/expense";
import ExpenseItem from "./ExpenseItem";



interface ExpenseListProps{
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div className="expenses">
      {expenses.map(expense => <ExpenseItem expense={expense} />)}
    </div>
  );
}
