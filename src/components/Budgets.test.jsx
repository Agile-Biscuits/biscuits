import { render, cleanup } from '@testing-library/react';
import Budgets from './Budgets';
import { EditProvider } from '../context/EditContext';

afterEach(cleanup);

describe('Budgets', () => {
  it('should render the budgets', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    expect(
      render(
        <EditProvider>
          <Budgets budgets={budgets} />
        </EditProvider>,
      ),
    ).toBeTruthy();
  });
  it('renders correct number of budgets', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    const { getAllByTestId } = render(
      <EditProvider>
        <Budgets budgets={budgets} />
      </EditProvider>,
    );
    expect(getAllByTestId('budget').length).toBe(budgets.length);
  });
  it('matches snapshot', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    const { asFragment } = render(
      <EditProvider>
        <Budgets budgets={budgets} />
      </EditProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
