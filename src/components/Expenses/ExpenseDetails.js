import React from 'react';
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <div className="expense-amount">Rs {props.amount}</div>
      <div className="expense-location">{props.location}</div>
    </div>
  );
}

export default ExpenseDetails;
