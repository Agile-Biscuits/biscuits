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

const TransactionsListContainer = styled.div`
  margin-top: 20px;
  background-color: #f8f8f8;   /* Light gray background for visual separation */
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);   /* Slight shadow for depth */
`;

const TransactionItem = styled.div`
  padding: 10px 15px;
  margin: 10px 0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  span {
    display: block;
    font-size: 14px;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

const TransactionTypeIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ type }) => (type === 'top-up' ? '#00cc77' : type === 'spend' ? '#e74c3c' : '#f39c12')};
`;

const TransactionType = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: auto;
  height: auto;
`;

const ActionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AmountInput = styled.input`
  margin: 0;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  font-size: 16px;
`;

const NoteInput = styled.input`
  margin: 0;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  const [note, setNote] = useState("");

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

    // Update the budget's value
    targetBudget.value += amount;
    if (targetBudget.value > targetBudget.amount) {
      targetBudget.value = targetBudget.amount;
    }

    // Push the new transaction record to the budget's transactions
    if (!targetBudget.transactions) {
      targetBudget.transactions = [];  // Ensure there's a transactions array if it doesn't exist
    }
    targetBudget.transactions.push({
      type: 'top-up',
      date: new Date().toISOString().split('T')[0], // Gets the current date in 'YYYY-MM-DD' format
      amount: amount,
      description: note
    });

    // Update the global budgets state
    const updatedBudgets = budgets.map((budget) =>
      budget.name === budgetName ? targetBudget : budget
    );

    setBudgets(updatedBudgets);
    // Reset the amount and note
    setAmount(0);
    setNote("");
  }, [budgetName, budgets, amount, note, setBudgets]);

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

      {budget && (
        <>
          <Budget name={budget.name} amount={budget.amount} value={budget.value} />

          <TransactionsListContainer>
            <h4>Transaction History:</h4>
            {budget.transactions && budget.transactions.length > 0 ? (
              budget.transactions.map((transaction, index) => (
                <TransactionItem key={index}>
                  <span><strong>Date:</strong> {transaction.date}</span>
                  <span>
                  <strong>Type:</strong>
                  <TransactionType>
                    <TransactionTypeIcon type={transaction.type} />
                    {transaction.type}
                  </TransactionType>
                </span>
                  <span><strong>Amount:</strong> {transaction.amount}</span>
                  <span><strong>Description:</strong> {transaction.description}</span>
                </TransactionItem>
              ))
            ) : (
              <p>No transactions found for this budget.</p>
            )}
          </TransactionsListContainer>
        </>
      )}

      <ActionsContainer>
        <InputContainer>
          <AmountInput type="number" placeholder="Amount..." value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          <NoteInput type="text" placeholder="Note..." value={note} onChange={(e) => setNote(e.target.value)} />
        </InputContainer>
        <ActionButton onClick={handleTopUp}>Top Up</ActionButton>
        <ActionButton onClick={handleSpend}>Spend</ActionButton>
      </ActionsContainer>
    </PageContainer>
  );

}
