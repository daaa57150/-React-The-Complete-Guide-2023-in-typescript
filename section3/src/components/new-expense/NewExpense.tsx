
import { Expense } from '@models/expense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface NewExpenseProps {
  onNewExpense: (expense: Expense) => void
}

export default function NewExpense({ onNewExpense }: NewExpenseProps) {

  return (
    <div className="new-expense">
      <ExpenseForm onValidSubmit={ onNewExpense }/>
    </div>
  )
}
