import React from 'react';
import { AddExpense } from './components/AddExpense/AddExpense';
import { Budget } from './components/Budget/Budget';
import { Expenses } from './components/Expenses/Expenses';
import { StyledApp } from './ui/appStyles';

function App() {
  return (
    <StyledApp>
      <Budget></Budget>
      <Expenses></Expenses>
      <AddExpense></AddExpense>
    </StyledApp>
  );
}

export default App;
