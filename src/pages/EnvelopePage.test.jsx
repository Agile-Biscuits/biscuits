import { render, screen } from "@testing-library/react";
import EnvelopePage from "./EnvelopePage";
import { BudgetsContext } from '../context/BudgetsContext';

describe("EnvelopePage", () => {
  it("renders a list of budgets", () => {
    const budgets = [
      { id: 1, name: "Groceries" },
      { id: 2, name: "Rent" },
    ];

    const { getAllByTestId } = render(
      <BudgetsContext.Provider value={{ budgets }}>
        <EnvelopePage />
      </BudgetsContext.Provider>
    );
    const budgetNames = getAllByTestId("budget-name")

    expect(budgetNames[0]).toHaveTextContent("Groceries");
    expect(budgetNames[1]).toHaveTextContent("Rent");
    expect(budgetNames.length).toBe(2);
  });
});