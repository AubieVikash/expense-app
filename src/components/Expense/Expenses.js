import { useState } from "react";
// import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpenseFilter.js";
import ExpensesList from './ExpensesList.js'
import ExpensesChart from './ExpensesChart.js'
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });


  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expenses;
