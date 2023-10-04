
import ExpenseItem from "@components/expenses/ExpenseItem";
import Card from "@components/ui/Card";
import { Expense } from "@models/expense";

import "./ExpenseList.scss";


interface ExpenseListProps{
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <Card className="expenses">
      { expenses.map(expense => <ExpenseItem expense={ expense } key={ expense.id } />) }
    </Card>
  );
}
