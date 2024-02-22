import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDetails
        amount={props.expenseAmount}
        location={props.locationOfExpenditure}
        title={props.expenseTitle}
      />
    </div>
  );
}

export default ExpenseItem;
