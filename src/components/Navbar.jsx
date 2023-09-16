import { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { PiPencilSimpleBold, PiX } from 'react-icons/pi';
import { EditContext } from '../context/EditContext';
import { Link, useLocation } from 'react-router-dom';
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
  margin-left: 1rem;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  text-align: center;
`;

const EditIcon = styled(PiPencilSimpleBold)`
  cursor: pointer;
`;

const XIcon = styled(PiX)`
  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  const [isInHomePage, setIsInHomePage] = useState(true);

  const location = useLocation();
  const isHomepage = location.pathname === '/';

  const { isEditing, setIsEditing } = useContext(EditContext);
  const handleIconClick = () => {
    console.log('clicked');
    console.log('isEditing ', isEditing);
    setIsInHomePage(!isEditing);
    setIsEditing(!isEditing);
  };

  const handleReturnToHome = () => {
    setIsInHomePage(true);
    window.location.href = '/';
  };

  return (
    <NavbarContainer>
      <LeftContainer>
        {isHomepage ? (
          <>
            <Logo src={LogoSrc} alt="logo" />
            <Header data-test-id="logo">Biscuits</Header>
          </>
        ) : (
          <>
            <XIcon onClick={handleReturnToHome} data-testid="navbar-x-icon" />
            <Header data-test-id="header">Wallet</Header>
          </>
        )}
      </LeftContainer>
      <Link to={isEditing ? "/" : "/envelope"} data-testid="navbar-edit-icon-link" >
        <EditIcon onClick={handleIconClick} data-testid="navbar-edit-icon" />
      </Link>
    </NavbarContainer>
  );
}
