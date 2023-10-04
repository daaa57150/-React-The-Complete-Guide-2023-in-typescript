import { Expense } from '@models/expense';
import u from '@shared/utils';
import dateFormat from "dateformat";
import _ from 'lodash';
import { useState } from 'react';
import './ExpenseForm.css';

interface ExpenseFormProps {
  onValidSubmit: (expense: Expense) => void
}

// TODO: maybe just use strings, not dates or numbers
type ExpenseData = Partial<Expense>; //

export default function ExpenseForm({ onValidSubmit }: ExpenseFormProps) {
  const [expense, setExpense] = useState<ExpenseData>();

  function mergeNewExpense(changes: ExpenseData): void {
    setExpense(prevState => u.merge(prevState, changes));
  }

  const titleChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => mergeNewExpense({ title: event.target.value });
  const amountChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => mergeNewExpense({ amount: event.target.valueAsNumber });
  const dateChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => mergeNewExpense({ date: new Date(event.target.value) });

  const formatDate = (date?: Date) => _.isNil(date) ? undefined : dateFormat(date, 'yyyy-mm-dd');

  // function changeHandler<TKey extends keyof NewExpense, TVal extends NewExpense[TKey]>(key: TKey, value: TVal) {
  //   mergeNewExpense({ [key]: value });
  // }

  const resetForm = () => setExpense({});

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!_.isNil(expense)) {
      onValidSubmit(expense as Expense); // cheating the type here, we should 1st make sure we have values
    }
    resetForm();
  }

  return (
    <form onSubmit={ formSubmitHandler }>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id='title' type="text"
            value={ expense?.title ?? '' }
            onChange={ titleChangedHandler }
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id='amount' type="number"
            min="0.01" step="0.01"
            value={ expense?.amount ?? '' }
            onChange={ amountChangedHandler }
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id='date' type="date"
            min="2019-01-01" max="2022-12-31"
            value={ formatDate(expense?.date) ?? '' }
            onChange={ dateChangedHandler }
          />
        </div>

        <div className="new-expense__actions">
          <button type='submit'>Add it</button>
        </div>
      </div>
    </form>
  );
}
