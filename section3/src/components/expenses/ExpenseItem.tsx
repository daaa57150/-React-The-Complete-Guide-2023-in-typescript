
import ExpenseDate from '@components/expenses/ExpenseDate';
import Card from '@components/ui/Card';
import { Expense } from '@models/expense';

import './ExpenseItem.scss';

interface Props {
  expense: Expense;
}

export default function ExpenseItem({ expense }: Props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">{expense.amount}€</div>
      </div>
    </Card>
  );
}

