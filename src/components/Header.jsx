import styled from '@emotion/styled';
import LogoSrc from '../assets/images/logo.svg';

const Header = styled.h1`
  display: flex;
  align-items: center;
  margin: 20px 16px 8px;
  font-size: 36px;
  font-weight: bold;
  color: #182B2B;
`;
const Logo = styled.img`
  width: 36px;
  height: 36px;
  text-align: center;
`;

export default function App() {
  return (
    <Header data-test-id="logo">
      <Logo src={LogoSrc} alt="logo" />
      Biscuits
    </Header>
  );
}
