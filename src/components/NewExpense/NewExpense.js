import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onExpenseButtonHandler = () => {
    setAddExpense(!addExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        expense={addExpense}
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelExpense={onExpenseButtonHandler}
      />
    </div>
  );
};

export default NewExpense;
