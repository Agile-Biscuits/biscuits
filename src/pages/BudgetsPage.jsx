import budgets from '../../fixtures/budgets';
import BudgetsComponent from '../components/Budgets';

export default function Budgets() {
  return (<BudgetsComponent budgets={budgets} />);
}
