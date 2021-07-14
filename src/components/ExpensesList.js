import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  return (
    <div>
      {props.expenses.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </div>
  );
}
