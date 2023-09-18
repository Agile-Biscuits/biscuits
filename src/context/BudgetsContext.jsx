import { createContext, useState, useEffect } from 'react';
import budgets from '../../fixtures/budgets';

export const BudgetsContext = createContext();

export const BudgetsProvider = ({ children }) => {
  const [budgetsData, setBudgetsData] = useState(budgets);

  const addTransactionToBudget = (budgetName, transaction) => {
    setBudgetsData(prevBudgets => {
      const newBudgets = [...prevBudgets];
      const targetBudget = newBudgets.find(b => b.name === budgetName);

      if (targetBudget) {
        if (!targetBudget.transactions) {
          targetBudget.transactions = [];
        }

        targetBudget.transactions.push(transaction);
      }

      return newBudgets;
    });
  };

  return (
    <BudgetsContext.Provider value={{ budgets: budgetsData, setBudgets: setBudgetsData }}>
      {children}
    </BudgetsContext.Provider>
  );
};
