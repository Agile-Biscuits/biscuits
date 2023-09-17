import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { BudgetsContext } from "../context/BudgetsContext";
import Budget from "../components/Budget";

const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export default function AddEnvelopePage() {
  const { budgets, setBudgets } = useContext(BudgetsContext);

  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const budgetId = Math.max(budgets.map((budget) => budget.id));

    console.log("add budget with new id: ", budgetId);

    // Add the budget from the list
    const newBudgets = budgets.push(
      new Budget({
        id: budgetId,
        name: "NewBudget" + String(budgetId),
        amount: 100,
        value: 100,
      }),
    );
    console.log("newBudgets: ", newBudgets);

    // Update the state
    setBudgets(newBudgets);
  };

  // debugger;
  // console.log("name", name);
  // console.log("amount", amount);

  return (
    <Container>
      <h1>Envelope Page</h1>
    </Container>
  );
}
