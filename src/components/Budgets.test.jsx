import { render, cleanup } from '@testing-library/react';
import Budgets from './Budgets';
import { EditProvider } from '../context/EditContext';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Budgets', () => {
  it('should render the budgets', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    expect(
      render(
        <BrowserRouter>
          <EditProvider>
            <Budgets budgets={budgets} />
          </EditProvider>
        </BrowserRouter>,
      ),
    ).toBeTruthy();
  });
  it('renders correct number of budgets', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    const { getAllByTestId } = render(
      <BrowserRouter>
        <EditProvider>
          <Budgets budgets={budgets} />
        </EditProvider>
      </BrowserRouter>,
    );
    expect(getAllByTestId('budget').length).toBe(budgets.length);
  });
  it('matches snapshot', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    const { asFragment } = render(
      <BrowserRouter>
        <EditProvider>
          <Budgets budgets={budgets} />
        </EditProvider>
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
