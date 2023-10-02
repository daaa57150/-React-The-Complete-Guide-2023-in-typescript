import { Expense } from "../models/expense";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.scss";


interface ExpenseListProps{
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <Card className="expenses">
      { expenses.map(expense => <ExpenseItem expense={expense} />) }
    </Card>
  );
}
