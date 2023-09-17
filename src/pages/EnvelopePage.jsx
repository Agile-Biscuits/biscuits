import { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PiPencilSimpleBold, PiTrashSimple } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { BudgetsContext } from '../context/BudgetsContext';
import EditEnvelopePage from './EditEnvelopePage';

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
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [budgetEditID, setBudgetEditID] = useState(-1);

  useEffect(() => {
    console.log(budgetEditID);
  });

  const handleEditBudget = (budgetID) => {
    console.log(`Handing edit of budget ID ${budgetID}`);
    console.log(`Set Edit ID funciton is ${self}`);

    setBudgetEditID(budgetID);
    navigate(`/envelopes/edit/${budgetID}`);
  };

  const handleDeleteBudget = (budgetId) => {
    console.log('delete budget with id: ', budgetId);
    // Delete the budget from the list
    const newBudgets = budgets.filter((budget) => budget.id !== budgetId);
    console.log('newBudgets: ', newBudgets);

    // Update the state
    setBudgets(newBudgets);
  };

  const updateBudget = (updatedBudget) => {
    const updatedBudgets = budgets.map((budget) => {
      budget.id === updatedBudget.id ? updatedBudget : budget;
    });
    setBudgets(updatedBudgets);
  };

  const handleEditEnd = () => {
    setBudgetEditID(-1);
  };

  console.log(`Budgets in Envelope page is currently ${budgets}`);
  console.log(`Budget ID is ${budgetEditID}`);

  return (budgetEditID <= -1 || isNaN(budgetEditID)) ? (
    <ListContainer>
      {budgets.map((budget) => (
        <ListItem key={budget.id}>
          <BudgetName data-testid="budget-name">{budget.name}</BudgetName>
          <IconContainer>
            <EditIcon
              onClick={() => handleEditBudget(budget.id)}
              data-testid="edit-icon"
            />
            <TrashIcon
              onClick={() => handleDeleteBudget(budget.id)}
              data-testid="trash-icon"
            />
          </IconContainer>
        </ListItem>
      ))}
    </ListContainer>
  ) : (
    <EditEnvelopePage budgetID={budgetEditID} onUpdateBudget={updateBudget} onEditEnd={handleEditEnd}/>
  );
}
