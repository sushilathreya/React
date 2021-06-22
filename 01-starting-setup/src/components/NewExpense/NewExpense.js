import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isForm, setIsForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsForm(false);
  };

  const addExpenseHandler = () => {
    setIsForm(true);
  };

  const closeFormHandler = () => {
    setIsForm(false);
  };

  return (
    <div className="new-expense">
      {!isForm && <button onClick={addExpenseHandler}>Add New Expense</button>}
      {isForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeFormHandler}/>}
    </div>
  );
}

export default NewExpense;
