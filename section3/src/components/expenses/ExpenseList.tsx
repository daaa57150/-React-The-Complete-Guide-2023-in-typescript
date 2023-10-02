
import { Expense } from "@models/expense";
import Card from "@components/ui/Card";
import ExpenseItem from "@components/expenses/ExpenseItem";

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
