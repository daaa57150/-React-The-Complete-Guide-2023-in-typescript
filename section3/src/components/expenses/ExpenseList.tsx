
import ExpenseItem from "@components/expenses/ExpenseItem";
import Card from "@components/ui/Card";
import { Expense } from "@models/expense";

import _ from 'lodash';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import "./ExpenseList.scss";


interface ExpenseListProps{
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: ExpenseListProps) {

  const [yearFilter, setYearFilter] = useState<number|undefined>(undefined);

  const matchesYearFilter = (date: Date) => _.isNil(yearFilter) ? true : date.getFullYear() === yearFilter;
  const filteredExpenses = expenses.filter(expense => matchesYearFilter(expense.date));

  return (
    <Card className="expenses">
      <ExpenseFilter onYearSelect={ setYearFilter } defaultYear={ yearFilter } />
      { filteredExpenses.map(expense => <ExpenseItem expense={ expense } key={ expense.id } />) }
    </Card>
  );
}
