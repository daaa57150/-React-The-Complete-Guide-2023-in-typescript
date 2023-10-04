import ExpenseList from '@components/expenses/ExpenseList';
import { Expense } from '@models/expense';

import ExpenseFilter from '@components/expenses/ExpenseFilter';
import NewExpense from '@components/new-expense/NewExpense';
import _ from 'lodash';
import { useState } from 'react';
import './App.scss';

const startingExpenses : Expense[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(startingExpenses);
  const [yearFilter, setYearFilter] = useState<number>();

  const addExpense = (expense: Expense) => {
    if(_.isNil(expense.id)) {
      expense.id = Math.random().toString();
    }
    setExpenses([...expenses, expense]);
  }

  const filterByYear = (year?: number) => {
    console.log(`We should filter with year: ${year}`);
    setYearFilter(year);
  }

  const matchesYearFilter = (date: Date) => _.isNil(yearFilter) ? true : date.getFullYear() === yearFilter;
  const filteredExpenses = () => {
    return expenses.filter(expense => matchesYearFilter(expense.date));
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onNewExpense={ addExpense }/>
        <ExpenseFilter onYearSelect={ filterByYear }/>
        <ExpenseList expenses={ filteredExpenses() } />
      </header>
    </div>
  );
}

export default App;
