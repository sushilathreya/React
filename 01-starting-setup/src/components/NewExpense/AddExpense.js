import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function AddExpense(props) {
  const AddExpenseHandler = () => {
    setNewState(<ExpenseForm onSaveExpenseData={props.onSaveExpenseData} />);
  };

  const addExpenseContainer = (
    <div className="new-expense__controls">
      <button onClick={AddExpenseHandler}>Add New Expense</button>
    </div>
  );

  const [initialState, setNewState] = useState(addExpenseContainer);

  return initialState;
}

export default AddExpense;
