import { useState } from 'react';
import './ExpenseForm.css';
import _ from 'lodash';

interface ExpenseFormProps {

}

interface NewExpense {
  title?: string,
  date?: Date,
  amount?: number
}

export default function ExpenseForm(props: ExpenseFormProps) {
  const [newExpense, setNewExpense] = useState<NewExpense>();

  function mergeNewExpense(slice: Partial<NewExpense>): void {
    const newValue: NewExpense = _.merge(newExpense, slice);
    setNewExpense(newValue);
  }

  const titleChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('title:', event.target.value);
    mergeNewExpense({ title: event.target.value });
  }

  const amountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => mergeNewExpense({ amount: event.target.valueAsNumber });
  const dateChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => mergeNewExpense({ date: new Date(event.target.value) });


  return (
    <form>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id='title' type="text" onChange={titleChangedHandler}></input>
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input id='amount' type="number" min="0.01" step="0.01" onChange={amountChangedHandler}></input>
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input id='date' type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}></input>
        </div>

        <div className="new-expense__actions">
          <button type='submit'>Add it</button>
        </div>
      </div>
    </form>
  );
}
