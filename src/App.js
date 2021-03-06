import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expense/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },{
    id: "e5",
    title: "PaperBoat",
    amount: 94.12,
    date: new Date(2021, 9, 14),
  },
  { 
    id: "e6", 
    title: "New Fridge", 
    amount: 799.49, 
    date: new Date(2021, 7, 12) 
  },
  {
    id: "e7",
    title: "Car",
    amount: 294.67,
    date: new Date(2019, 6, 28),
  },
  {
    id: "e8",
    title: "Wooden Chair",
    amount: 450,
    date: new Date(2019, 3, 12),
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
