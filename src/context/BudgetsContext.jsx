import { createContext, useState, useEffect } from 'react';
import budgets from '../../fixtures/budgets';

export const BudgetsContext = createContext();

export const BudgetsProvider = ({ children }) => {
  const [budgetsData, setBudgetsData] = useState(budgets);

  return (
    <BudgetsContext.Provider value={{ budgets: budgetsData, setBudgets: setBudgetsData }}>
      {children}
    </BudgetsContext.Provider>
  );
};
