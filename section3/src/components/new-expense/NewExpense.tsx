
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

interface NewExpenseProps {

}

export default function NewExpense(props: NewExpenseProps) {
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  )
}
