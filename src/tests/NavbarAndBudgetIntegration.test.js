import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { EditProvider } from '../context/EditContext';
import Navbar from '../components/Navbar';
import Budget from '../components/Budget';

afterEach(cleanup);

describe('Navbar and Budget Integration', () => {
  xit('should render pencil icon next to the budget name when the edit button is clicked', () => {
    render(
      <EditProvider>
        <Navbar />
        <Budget name="Test" amount={100} value={50}/>
      </EditProvider>
    );

    const navbarEditButton = screen.queryByTestId('navbar-edit-icon');
    const budgetEditButton = screen.queryByTestId('edit-icon');

    // Edit button should not be visible
    expect(screen.queryByTestId('edit-icon')).not.toBeInTheDocument();

    // Click the navbar edit button
    fireEvent.click(screen.getByTestId('navbar-edit-icon'));

    // Edit button next to budgets should be visible
    expect(screen.queryByTestId('edit-icon')).toBeInTheDocument();
  });
});