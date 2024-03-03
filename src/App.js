import React from 'react';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { expenseTitle: 'Food', expenseAmount: 10, locationOfExpenditure: 'Grocery Store', expenseDate: new Date(2022, 2, 23) },
    { expenseTitle: 'Petrol', expenseAmount: 100, locationOfExpenditure: 'Gas Station', expenseDate: new Date(2022, 2, 24) },
    { expenseTitle: 'Movies', expenseAmount: 200, locationOfExpenditure: 'Cinema', expenseDate: new Date(2022, 2, 25) }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div>
      <h1>Expense Items</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} {...expense} />
      ))}
    </div>
  );
}

export default App;
