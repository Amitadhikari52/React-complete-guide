import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDetails
        amount={props.expenseAmount}
        location={props.locationOfExpenditure}
        title={props.expenseTitle}
      />
    </Card>
  );
}

export default ExpenseItem;
