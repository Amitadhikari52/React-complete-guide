import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2022, 2, 23);
  const expenseTitle = "Food";
  const expenseAmount = 10;
  const locationOfExpenditure = "Grocery Store";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__location">{locationOfExpenditure}</div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
