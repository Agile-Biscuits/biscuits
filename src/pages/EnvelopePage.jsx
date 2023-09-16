import { useContext } from 'react';
import styled from '@emotion/styled';
import { PiPencilSimpleBold, PiTrashSimple } from 'react-icons/pi';
import { BudgetsContext } from '../context/BudgetsContext';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  border-top: 2px solid #000;
  border-bottom: 1px solid #ccc;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

const BudgetName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

const EditIcon = styled(PiPencilSimpleBold)`
  cursor: pointer;
`;

const TrashIcon = styled(PiTrashSimple)`
  cursor: pointer;
`;

export default function EnvelopePage() {
  const { budgets, setBudgets } = useContext(BudgetsContext);

  const handleDeleteBudget = (budgetId) => {
    console.log('delete budget with id: ', budgetId);
    // Delete the budget from the list
    const newBudgets = budgets.filter((budget) => budget.id !== budgetId);
    console.log('newBudgets: ', newBudgets);

    // Update the state
    setBudgets(newBudgets);
  };

  return (
    <ListContainer>
      {budgets.map((budget) => (
        <ListItem key={budget.id}>
          <BudgetName data-testid="budget-name" >{budget.name}</BudgetName>
          <IconContainer>
            <EditIcon />
            <TrashIcon onClick={() => handleDeleteBudget(budget.id)} data-testid="trash-icon" />
          </IconContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
}
