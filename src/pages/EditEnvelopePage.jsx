import { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { BudgetsContext } from '../context/BudgetsContext';
import Budget from '../models/Budget';

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

export default function EditEnvelopePage(props) {
  const { budgets, setBudgets } = useContext(BudgetsContext);
  const { budgetID } = useParams();

  console.log(`Edit page budget ID is ${props.budgetID}`);

  const budgetIndex = budgets.findIndex(
    (budget) => budget.id === props.budgetID,
  );

  const [inputValues, setInputValues] = useState({
    name: budgets[budgetIndex].name,
    value: budgets[budgetIndex].value,
    amount: budgets[budgetIndex].amount,
  });

  useEffect(() => {
    console.log(inputValues);
  });

  const handleChanges = (event, item) => {
    let { name, value, amount, _id } = budgets[budgetIndex];

    if (item == "name") {
      name = String(event.target.value);
      console.log(`Value is ${name}`);
    } else if (item === "amount") {
      amount = Number(event.target.value);
      console.log(`Value is ${amount}`);
    } else if (item === "value") {
      value = Number(event.target.value);
      console.log(`Value is ${value}`);
    }

    const newBudget = new Budget({
      id: props.budgetID,
      name: name,
      value: value,
      amount: amount,
    });

    setInputValues({
      name: name,
      value: value,
      amount: amount,
    });

    let newBudgets = budgets;
    newBudgets[budgetIndex] = newBudget;
    setBudgets(newBudgets);
  };

  // debugger;
  // console.log("name", name);
  // console.log("amount", amount);

  console.log(`Editing Envelope budget ID is ${props.budgetID}`);
  console.log(`Editing Envelope budget index is ${budgetIndex}`);

  console.log("Editing Envelope!");

  return (
    <FormContainer>
      <Container>
        Name:
        <Input
          type="text"
          onChange={(evt) => handleChanges(evt, "name")}
          value={inputValues.name}
          id="name-edit"
        ></Input>
      </Container>

      <Container>
        Amount:
        <Input
          type="value"
          onChange={(evt) => handleChanges(evt, "amount")}
          value={inputValues.amount}
          id="amount-edit"
        ></Input>
      </Container>

      <Container>
        Value:
        <Input
          type="value"
          onChange={(evt) => handleChanges(evt, "value")}
          value={inputValues.value}
          id="value-edit"
        ></Input>
      </Container>
    </FormContainer>
  );
}
