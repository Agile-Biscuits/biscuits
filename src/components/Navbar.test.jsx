import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Router, useNavigate, MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { BudgetsContext } from '../context/BudgetsContext';
import { EditContext } from '../context/EditContext';

afterEach(cleanup);

const mockBudgets = [];
const mockSetBudgets = jest.fn();
const mockIsEditing = false;
const mockSetIsEditing = jest.fn();


function renderWithProviders(ui, options) {
  return render(
    <BudgetsContext.Provider value={{ budgets: mockBudgets, setBudgets: mockSetBudgets }}>
      <EditContext.Provider value={{ isEditing: mockIsEditing, setIsEditing: mockSetIsEditing }}>
        <MemoryRouter>
          {ui}
        </MemoryRouter>
      </EditContext.Provider>
    </BudgetsContext.Provider>,
    options
  );
}



const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
      <Navbar />
  );
};

describe('Navbar', () => {

  context('when user loads homepage', () => {

    it('shows product name', () => {
      const productName = 'Biscuits';
      renderWithProviders(<NavbarComponent />);
      expect(screen.getByText(productName)).toBeTruthy();
    });

    it('navigates to envelopes page on pencil icon click', () => {
      renderWithProviders(<NavbarComponent />);

      // Simulate a click on the pencil icon link
      fireEvent.click(screen.getByTestId('navbar-edit-icon'));

      // Check that the content changed to the new page
      expect(screen.getByText('Edit Envelope')).toBeInTheDocument();
    });

    xit('navigates back to home page on pencil icon click twice', () => {
      render(<MemoryRouter><NavbarComponent /></MemoryRouter>);

      // Simulate a click on the pencil icon link
      fireEvent.click(screen.getByTestId('navbar-edit-icon'));

      // Check that the content changed to the new page
      expect(window.location.pathname).toBe('/envelopes');

      // Simulate a click on the pencil icon link again
      fireEvent.click(screen.getByTestId('navbar-edit-icon'));

      // Check that the content changed back to the Home page
      expect(window.location.pathname).toBe('/');
    });
  });
});
