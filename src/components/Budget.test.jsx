import { render, cleanup } from '@testing-library/react';
import Budget from './Budget';
import { EditProvider } from '../context/EditContext';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('Budget', () => {
  it('should render the budget', () => {
    expect(
      render(
        <BrowserRouter>
          <EditProvider>
            <Budget name="Test" amount={100} value={50} />
          </EditProvider>
        </BrowserRouter>,
      ),
    ).toBeTruthy();
  });
  it('should render the budget name', () => {
    const { getByText } = render(
      <BrowserRouter>
        <EditProvider>
          <Budget name="Test" amount={100} value={50} />
        </EditProvider>
      </BrowserRouter>
    );
    expect(getByText('Test'.toUpperCase())).toBeTruthy();
  });
  it('should render the budget amount', () => {
    const { getByText } = render(
      <BrowserRouter>
        <EditProvider>
          <Budget name="Test" amount={100} value={50} />
        </EditProvider>
      </BrowserRouter>
    );
    expect(getByText('£50.00')).toBeTruthy();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <EditProvider>
          <Budget name="Test" amount={100} value={50} />
        </EditProvider>
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
