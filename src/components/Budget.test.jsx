import { render, cleanup } from '@testing-library/react';
import Budget from './Budget';

afterEach(cleanup);

describe('Budget', () => {
  it('should render the budget', () => {
    expect(render(<Budget name="Test" amount={100} value={50} />)).toBeTruthy();
  });
  it('should render the budget name', () => {
    const { getByText } = render(
      <Budget name="Test" amount={100} value={50} />,
    );
    expect(getByText('Test')).toBeTruthy();
  });
  it('should render the budget amount', () => {
    const { getByText } = render(
      <Budget name="Test" amount={100} value={50} />,
    );
    expect(getByText('50')).toBeTruthy();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Budget name="Test" amount={100} value={50} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
