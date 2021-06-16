import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>June 16th 2021</div>
      <div className = "expense-item__description">
        <h2>Headphones</h2>
        <div className = "expense-item__price">₹5000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
