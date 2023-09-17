import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EnvelopePage from './EnvelopePage';
import { BudgetsContext } from '../context/BudgetsContext';

const setBudgets = jest.fn();

describe('EnvelopePage', () => {
  it('renders a list of budgets', () => {
    const budgets = [
      { id: 1, name: 'Groceries' },
      { id: 2, name: 'Rent' },
    ];

    const { getAllByTestId } = render(
      <MemoryRouter>
        <BudgetsContext.Provider value={{ budgets, setBudgets }}>
          <EnvelopePage />
        </BudgetsContext.Provider>
      </MemoryRouter>
    );
    const budgetNames = getAllByTestId('budget-name');

    expect(budgetNames[0]).toHaveTextContent('Groceries');
    expect(budgetNames[1]).toHaveTextContent('Rent');
    expect(budgetNames.length).toBe(2);
  });

  it('deletes a budget when the trash can icon is clicked', async () => {
    const budgets = [
      { id: 1, name: 'Groceries' },
      { id: 2, name: 'Rent' },
    ];

    // Create a mock function
    const setBudgets = jest.fn();

    const { getAllByTestId } = render(
      <MemoryRouter>
        <BudgetsContext.Provider value={{ budgets, setBudgets }}>
          <EnvelopePage />
        </BudgetsContext.Provider>
      </MemoryRouter>
    );

    const trashIcons = getAllByTestId('trash-icon');
    fireEvent.click(trashIcons[0]);

    // Check that setBudgets was called with the correct arguments
    expect(setBudgets).toHaveBeenCalledWith([
      { id: 2, name: 'Rent' },
    ]);
  });
});
