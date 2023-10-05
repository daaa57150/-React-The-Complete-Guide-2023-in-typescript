import Chart from '@components/chart/Chart';
import { Expense } from '@models/expense';
import _ from 'lodash';
import './ExpensesChart.css';

interface Props {
  expenses: Expense[];
}

export default function ExpensesChart({ expenses }: Props) {

  const getValueForMonth = (month: number) =>
    _.sumBy(
      expenses.filter(expense => expense.date.getMonth() === month),
      expense => expense.amount
    );

  const amountByMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      .map((label, index) => ({
        label,
        value: getValueForMonth(index)
      }));

  return (
    <Chart contents={ amountByMonth } />
  );
}
