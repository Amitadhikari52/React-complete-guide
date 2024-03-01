import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDetails
        amount={props.expenseAmount}
        location={props.locationOfExpenditure}
        title={props.expenseTitle}
      />
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
