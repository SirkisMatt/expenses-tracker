import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import ShowExpenseForm from "./ShowExpenseForm";

const NewExpense = (props) => {
  const [showForm, toggleForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showFormHandler = () => {
    toggleForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <ShowExpenseForm toggleShowForm={showFormHandler} />
      ) : (
        <ExpenseForm
          toggleShowForm={showFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
