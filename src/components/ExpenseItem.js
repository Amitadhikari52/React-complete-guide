import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { expenseTitle, expenseAmount, locationOfExpenditure, expenseDate } = props;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__location">{locationOfExpenditure}</div>
        <div className="expense-item__price">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
