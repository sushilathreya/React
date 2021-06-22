import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const onFilterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearFilter={onFilterHandler} />
      <ExpensesChart expenses = {filteredExpenses} />
      <ExpensesList filteredList={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
