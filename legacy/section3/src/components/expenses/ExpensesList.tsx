import { Expense } from '@models/expense';
import _ from 'lodash';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';



interface Props {
  expenses: Expense[];
}

export default function ExpensesList({ expenses }: Props) {

  const hasExpenses = !_.isEmpty(expenses);
  if(!hasExpenses) {
    return <h2 className="expenses-list__fallback">Nope, nothing</h2>;
  }

  return (
    <ul className="expenses-list">
      { expenses.map(expense =>
        <li key={ expense.id }>
          <ExpenseItem expense={ expense }  />
        </li>
      )}
    </ul>
  );
}
