import React, { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const form = e.target;
    const newExpense = {
      id: Date.now(),
      description: form.description.value,
      amount: parseFloat(form.amount.value),
      category: form.category.value,
      date: form.date.value,
    };
    setExpenses([...expenses, newExpense]);
    form.reset();
  };

  return (
    <div className="container">
      <h1>💰 My Expense Tracker</h1>

      <form className="expense-form" onSubmit={handleAddExpense}>
        <input name="description" placeholder="Description" required />
        <input name="amount" type="number" placeholder="Amount" required />
        <input name="category" placeholder="Category" required />
        <input name="date" type="date" required />
        <button type="submit">Add Expense</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.description}</td>
              <td>{exp.amount.toFixed(2)}</td>
              <td>{exp.category}</td>
              <td>{exp.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
