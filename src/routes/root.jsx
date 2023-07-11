import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from '../components/Header';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export default function Root() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
