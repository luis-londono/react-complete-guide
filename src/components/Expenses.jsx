import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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