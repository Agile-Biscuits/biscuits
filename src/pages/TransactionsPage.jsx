import { useCallback, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import Budget from '../components/Budget';
import { BudgetsContext } from '../context/BudgetsContext';

const PageContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const TransactionHeader = styled.h3`
  margin-bottom: 20px;
  color: #182b2b;
  text-align: center;
  font-weight: 600; 
  letter-spacing: 0.5px; 
  padding: 10px 20px; 
  border-radius: 5px; 
  background-color: #f5f5f5; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ActionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AmountInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  font-size: 16px;
`;

const ActionButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #00cc77;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005fa3;
  }

  &:nth-of-type(2) {
    background-color: #e74c3c;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

export default function TransactionPage() {
  const { budgetName } = useParams();
  const { budgets, setBudgets } = useContext(BudgetsContext);
  const [amount, setAmount] = useState(0);

  const getTargetBudget = useCallback(() => {
    return budgets.find((budget) => budget.name === budgetName);
  }, [budgets, budgetName]);

  const budget = getTargetBudget();

  const handleTopUp = useCallback(() => {
    const targetBudget = getTargetBudget();

    if (!targetBudget) {
      console.error(`No budget found with the name: ${budgetName}`);
      return;
    }

    targetBudget.value += amount;

    if (targetBudget.value > targetBudget.amount) {
      targetBudget.value = targetBudget.amount;
    }

    const updatedBudgets = budgets.map((budget) =>
      budget.name === budgetName ? targetBudget : budget
    );

    setBudgets(updatedBudgets);
    setAmount(0);
  }, [budgetName, budgets, amount, setBudgets]);


  const handleSpend = useCallback(() => {
    const targetBudget = getTargetBudget();

    if (!targetBudget) {
      console.error(`No budget found with the name: ${budgetName}`);
      return;
    }

    targetBudget.value -= amount;

    if (targetBudget.value < 0) {
      targetBudget.value = 0;
    }

    const updatedBudgets = budgets.map((budget) =>
      budget.name === budgetName ? targetBudget : budget
    );

    setBudgets(updatedBudgets);
    setAmount(0);
  }, [budgetName, budgets, amount, setBudgets]);

  return (
    <PageContainer>
      <TransactionHeader>Transactions for {budgetName}</TransactionHeader>

      {budget && <Budget name={budget.name} amount={budget.amount} value={budget.value} />}

      <ActionsContainer>
        <AmountInput type="number" placeholder="Amount..." value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <ActionButton onClick={handleTopUp}>Top Up</ActionButton>
        <ActionButton onClick={handleSpend}>Spend</ActionButton>
      </ActionsContainer>
    </PageContainer>
  );
}
