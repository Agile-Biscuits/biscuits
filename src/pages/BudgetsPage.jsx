import { useContext } from 'react';
import BudgetsComponent from '../components/Budgets';
import { BudgetsContext } from '../context/BudgetsContext';

export default function BudgetsPage() {
  const { budgets, setBudgets } = useContext(BudgetsContext);

  return (<BudgetsComponent budgets={budgets} />);
}
