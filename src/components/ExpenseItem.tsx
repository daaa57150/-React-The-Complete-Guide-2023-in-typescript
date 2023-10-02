import { Expense } from '../models/expense';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.scss';

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem({ expense }: ExpenseItemProps) {

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

export default ExpenseItem;
