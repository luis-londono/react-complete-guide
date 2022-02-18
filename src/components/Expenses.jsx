import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {

  return (
    <>
      <Card className="expenses">
        {props.items && props.items.map(x =>
          <ExpenseItem id={x.id} title={x.title} amount={x.amount} date={x.date} />
        )
        }
      </Card>
    </>
  );
};

export default Expenses;