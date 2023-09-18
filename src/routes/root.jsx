import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import { EditContext } from '../context/EditContext';
import { BudgetsProvider} from '../context/BudgetsContext';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export default function Root() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      <BudgetsProvider>
        <Container>
          <Navbar isEditing={isEditing} setIsEditing={setIsEditing} />
          <Outlet />
        </Container>
      </BudgetsProvider>
    </EditContext.Provider>
  );
}
