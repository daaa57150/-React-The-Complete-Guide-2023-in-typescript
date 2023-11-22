
import Card from "@components/ui/Card";
import { Expense } from "@models/expense";

import _ from 'lodash';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import "./Expenses.scss";
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';


interface Props{
  expenses: Expense[]
}

export default function ExpenseList({ expenses }: Props) {

  const [yearFilter, setYearFilter] = useState<number|undefined>(undefined);

  const matchesYearFilter = (date: Date) => _.isNil(yearFilter) ? true : date.getFullYear() === yearFilter;
  const filteredExpenses = expenses.filter(expense => matchesYearFilter(expense.date));

  return (
    <Card className="expenses">
      <ExpenseFilter onYearSelect={ setYearFilter } defaultYear={ yearFilter } />
      <ExpensesChart expenses={ filteredExpenses } />
      <ExpensesList expenses={ filteredExpenses } />
    </Card>
  );
}
