import React from 'react';
import { render, cleanup } from "@testing-library/react";
import Budgets from './Budgets';

afterEach(cleanup);

describe('Budgets', () => {
  it('should render the budgets', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    expect(render(<Budgets budgets={budgets} />)).toBeTruthy();
  });
  it('renders correct number of budgets', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    const { getAllByTestId } = render(<Budgets budgets={budgets} />);
    expect(getAllByTestId('budget').length).toBe(budgets.length);
  });
  it('matches snapshot', () => {
    const budgets = [
      { name: 'Test 1', amount: 100, value: 50 },
      { name: 'Test 2', amount: 200, value: 50 },
    ];
    const { asFragment } = render(<Budgets budgets={budgets} />);
    expect(asFragment()).toMatchSnapshot();
  });
});