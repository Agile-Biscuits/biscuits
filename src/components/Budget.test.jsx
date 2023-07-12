import { render, cleanup } from '@testing-library/react';
import Budget from './Budget';
import { EditProvider } from '../context/EditContext';

afterEach(cleanup);

describe('Budget', () => {
  it('should render the budget', () => {
    expect(
      render(
        <EditProvider>
          <Budget name="Test" amount={100} value={50}/>
        </EditProvider>
      )
    ).toBeTruthy()
  });
  it('should render the budget name', () => {
    const { getByText } = render(
      <EditProvider>
        <Budget name="Test" amount={100} value={50}/>
      </EditProvider>
    );
    expect(getByText('Test')).toBeTruthy();
  });
  it('should render the budget amount', () => {
    const { getByText } = render(
      <EditProvider>
        <Budget name="Test" amount={100} value={50}/>
      </EditProvider>
    );
    expect(getByText('£50.00')).toBeTruthy();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(
      <EditProvider>
        <Budget name="Test" amount={100} value={50}/>
      </EditProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
