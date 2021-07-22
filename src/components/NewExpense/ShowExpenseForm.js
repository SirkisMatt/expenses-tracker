import React from "react";

const ShowExpenseForm = (props) => {
  return (
    <div>
      <button onClick={props.toggleShowForm}>Add Expense</button>
    </div>
  );
};

export default ShowExpenseForm;
