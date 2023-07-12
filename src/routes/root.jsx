import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export default function Root() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}
