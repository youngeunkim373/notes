import { ExpenseTypes } from "../../types/globalTypes";
import convertNumber from "../../utils/convertNumber";
import Chart from "../chart/Chart";

interface ExpensesChartProps {
  expenses: ExpenseTypes[];
  filter: { [key: string]: number };
}

const ExpensesChart = ({ expenses, filter }: ExpensesChartProps) => {
  const chartDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  let maxValue = 0;
  for (let expense of expenses) {
    const expenseYear = expense.date.getFullYear();
    const expenseMonth = expense.date.getMonth();

    if (expenseYear === filter.year) {
      maxValue += convertNumber(expense.price);
      chartDataPoints[expenseMonth].value += convertNumber(expense.price);
    }
  }

  return (
    <div>
      <Chart dataPoints={chartDataPoints} maxValue={maxValue} />
    </div>
  );
};

export default ExpensesChart;
