import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <>
      <Card className="expenses">
        <ExpenseItem />

      </Card>
    </>
  );
};

export default Expenses;