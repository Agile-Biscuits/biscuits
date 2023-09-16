import budgets from '../../fixtures/budgets';
import BudgetsComponent from '../components/Budgets';

export default function BudgetsPage() {
  return (<BudgetsComponent budgets={budgets} />);
}
