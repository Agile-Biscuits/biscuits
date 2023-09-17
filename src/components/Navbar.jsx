import { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { PiPencilSimpleBold, PiX, PiPlusBold } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';
import { EditContext } from '../context/EditContext';
import Budget from '../models/Budget';
import { BudgetsContext } from '../context/BudgetsContext';
import LogoSrc from '../assets/images/logo.svg';
import EditEnvelopePage from "../pages/EditEnvelopePage";

const NavbarContainer = styled.div`
  margin: 20px 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #182b2b;
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
  const { isEditing, setIsEditing } = useContext(EditContext);

  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const isEditEnvelopePage = location.pathname === '/envelopes/edit';
  const isEditEnvelopePageId = location.pathname === '/envelopes/edit/:id';
  const isTransactionsPage = location.pathname.startsWith('/transactions');


  const { budgets, setBudgets } = useContext(BudgetsContext);

  const handlePencilIconClick = () => {
    console.log('clicked');
    console.log('isEditing ', isEditing);
    setIsInHomePage(!isEditing);
    setIsEditing(!isEditing);
  };

  const handlePlusIconClick = () => {
    console.log('clicked plus icon');
    console.log('isEditing ', isEditing);

    const idArr = budgets.map((budget) => budget.id);
    const budgetId = Math.max(...idArr) + 1;

    console.log('add budget with new id: ', budgetId);

    // Add the budget from the list
    console.log(`budgets = ${budgets}`);
    const newBudgets = budgets;
    newBudgets.push(
      new Budget({
        id: budgetId,
        name: `NewBudget - ${budgetId}`,
        amount: 100,
        value: 100,
      }),
    );
    console.log('newBudgets: ', newBudgets);

    // Update the state
    setBudgets(newBudgets);
    setIsInHomePage(!isEditing);
    setIsEditing(!isEditing);
  };

  const handleReturnToHome = () => {
    setIsInHomePage(true);
    setIsEditing(false);
  };

  const getHeaderTitle = () => {
    if (isHomepage) {
      return 'Biscuits';
    }
    if (isEditEnvelopePage) {
      return 'Edit Envelope';
    }
    if (isTransactionsPage) {
      return 'Transactions';
    }
    return 'Wallet';
  };

  const headerTitle = getHeaderTitle();

  return (
    <NavbarContainer>
      <LeftContainer>
        {isHomepage ? (
          <>
            <Logo src={LogoSrc} alt="logo" />
            <Header data-test-id="logo">{headerTitle}</Header>
          </>
        ) : (
          <>
            <Link to="/" data-testid="navbar-edit-icon-link">
              <XIcon onClick={handleReturnToHome} data-testid="navbar-x-icon" />
            </Link>
            <Header data-test-id="header">{headerTitle}</Header>
          </>
        )}
      </LeftContainer>

      {!isEditing && (
        <Link to="/envelopes" data-testid="navbar-edit-icon-link">
          <EditIcon onClick={handlePencilIconClick} data-testid="navbar-edit-icon" />
        </Link>
      )}

      {location.pathname === '/envelopes' && (
        <Link to="/envelopes/edit">
          <PiPlusBold onClick={handlePlusIconClick} />
        </Link>
      )}
    </NavbarContainer>
  );
}
