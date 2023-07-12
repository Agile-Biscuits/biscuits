import { useContext } from 'react';
import styled from '@emotion/styled';
import { PiPencilSimpleBold } from 'react-icons/pi';
import { EditContext } from '../context/EditContext';
import LogoSrc from '../assets/images/logo.svg';

const NavbarContainer = styled.div`
  margin: 20px 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #182B2B;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  text-align: center;
`;

const EditIcon = styled(PiPencilSimpleBold)`
  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  const { isEditing, setIsEditing } = useContext(EditContext);
  const handleIconClick = () => {
    console.log('clicked');
    console.log('isEditing ', isEditing);
    setIsEditing(!isEditing);
  };

  return (
    <NavbarContainer>
      <LeftContainer>
        <Logo src={LogoSrc} alt="logo" />
        <Header data-test-id="logo">Biscuits</Header>
      </LeftContainer>
      <EditIcon onClick={handleIconClick} data-testid="navbar-edit-icon" />
    </NavbarContainer>
  );
}
