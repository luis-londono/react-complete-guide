import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;

  const month = date.toLocaleString('en-us', { month: 'long' });
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <>
      <div className="expense-date">
        <div className="expense-date_month">{month}</div>
        <div className="expense-date_year">{year}</div>
        <div className="expense-date_day">{day}</div>
      </div>
    </>
  );
};

export default ExpenseDate;

