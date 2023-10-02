import './ExpenseDate.scss';

interface ExpenseDateProps {
  date: Date
}

export default function ExpenseDate({ date }: ExpenseDateProps) {

  const month = date.toLocaleDateString('fr', { month: 'long' });
  const day = date.toLocaleDateString('fr', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};
