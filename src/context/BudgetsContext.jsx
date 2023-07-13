import { createContext, useState, useEffect } from 'react';
import budgets from '../../fixtures/budgets';

export const BudgetsContext = createContext();

export const BudgetsProvider = ({ children }) => {
  const [budgetsData, setBudgetsData] = useState([]);

  useEffect(() => {
    setBudgetsData(budgets);
  }, []);

  return (
    <BudgetsContext.Provider value={{ budgets: budgetsData }}>
      {children}
    </BudgetsContext.Provider>
  );
};