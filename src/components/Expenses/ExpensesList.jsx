import { useMemo } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const EmptyWrapper = ({ children, isEmpty, emptyMsg = "No items found" }) => {
  return isEmpty ? (
    <h2 className="expenses-list__fallback">{emptyMsg}</h2>
  ) : (
    children
  );
};

const ExpensesList = (props) => {
  const { items } = props;
  const isEmpty = useMemo(() => items.length === 0, [items]);

  return (
    <ul className="expenses-list">
      <EmptyWrapper isEmpty={isEmpty} emptyMsg="No expenses found.">
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </EmptyWrapper>
    </ul>
  );
};

export default ExpensesList;
