import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.expenses);

  const filterExpensesHandler = (selectedYear) => {
    if (selectedYear === "all") {
      setExpenses(props.expenses);
      return;
    }
    const filteredExpense = props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
    setExpenses(filteredExpense);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterExpensesByYear={filterExpensesHandler} />
        {expenses.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
