import styled from '@emotion/styled';

const Header = styled.h1`
  margin: 20px 16px 8px;
  font-size: 36px;
  font-weight: bold;
  color: #182B2B;
`;

export default function App() {
  return <Header data-test-id="logo">Biscuits</Header>;
}
