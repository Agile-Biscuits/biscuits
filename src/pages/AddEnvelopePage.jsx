import { useContext } from 'react';
import styled from '@emotion/styled';
import { PiPencilSimpleBold } from 'react-icons/pi';
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

const EditIcon = styled(PiPencilSimpleBold)`
  cursor: pointer;
`;


export default function AddEnvelopePage() {
  const { budgets } = useContext(BudgetsContext);

  return (
    <ListContainer>
      {budgets.map((budget) => (
        <ListItem key={budget.id}>
          <BudgetName data-testid="budget-name" >{budget.name}</BudgetName>
          <EditIcon />
        </ListItem>
      ))}
    </ListContainer>
  );
}

