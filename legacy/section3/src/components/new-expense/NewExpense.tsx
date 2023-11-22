
import { Expense } from '@models/expense';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface Props {
  onNewExpense: (expense: Expense) => void
}

export default function NewExpense({ onNewExpense }: Props) {

  const wrap = (element: JSX.Element | JSX.Element[]) => (
    <div className="new-expense">{ element }</div>
  );

  const [formVisible, setFormVisible] = useState(false);
  if(!formVisible) {
    return wrap(
      <button onClick={ () => setFormVisible(true) }>Add new expense</button>
    );
  }

  const addNewExpense = (expense: Expense) => {
    onNewExpense(expense);
    setFormVisible(false);
  };

  return wrap(
    <ExpenseForm onValidSubmit={ addNewExpense } onCancel={ () => setFormVisible(false) }/>
  );
}
