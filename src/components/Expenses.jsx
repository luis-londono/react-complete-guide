import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(x => {
    return x.date.getFullYear().toString() === filteredYear;
  })

  return (
    <>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card className="expenses">
        {filteredExpenses.map(x =>
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
          />
        )
        }
      </Card>
    </>
  );
};

export default Expenses;