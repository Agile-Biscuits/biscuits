import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import { EditContext } from '../context/EditContext';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export default function Root() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <EditContext.Provider value={{ isEditing, setIsEditing }}>
      <Container>
        <Navbar isEditing={isEditing} setIsEditing={setIsEditing} />
        <Outlet />
      </Container>
    </EditContext.Provider>
  );
}
