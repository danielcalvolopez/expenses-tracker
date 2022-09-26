import Chart from "../Chart/Chart";

const chartDataPointsByMonths = {
  1: {
    monthId: 1,
    label: "Jan",
    value: 0,
  },
  2: {
    monthId: 2,
    label: "Feb",
    value: 0,
  },
  3: {
    monthId: 3,
    label: "Mar",
    value: 0,
  },
  4: {
    monthId: 4,
    label: "Apr",
    value: 0,
  },
  5: {
    monthId: 5,
    label: "May",
    value: 0,
  },
  6: {
    monthId: 6,
    label: "Jun",
    value: 0,
  },
  7: {
    monthId: 7,
    label: "Jul",
    value: 0,
  },
  9: {
    monthId: 9,
    label: "Sep",
    value: 0,
  },
  8: {
    monthId: 8,
    label: "Aug",
    value: 0,
  },
  10: {
    monthId: 10,
    label: "Oct",
    value: 0,
  },
  11: {
    monthId: 11,
    label: "Nov",
    value: 0,
  },
  12: {
    monthId: 12,
    label: "Dec",
    value: 0,
  },
};
const ExpensesChart = ({ expenses }) => {
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth() + 1;
    chartDataPointsByMonths[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={Object.values(chartDataPointsByMonths)} />;
};

export default ExpensesChart;
