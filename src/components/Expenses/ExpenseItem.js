import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.expenseAmount);

  const updateAmountHandler = () => {
    setAmount(100); // Change the amount to 100$
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDetails
        amount={amount}
        location={props.locationOfExpenditure}
        title={props.expenseTitle}
      />
      <button onClick={updateAmountHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
