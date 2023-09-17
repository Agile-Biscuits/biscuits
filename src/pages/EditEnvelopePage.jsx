import { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { BudgetsContext } from '../context/BudgetsContext';
import { EditContext } from '../context/EditContext';
import Budget from '../models/Budget';

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border 0.2s;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function EditEnvelopePage(props) {
  const { budgets, setBudgets } = useContext(BudgetsContext);
  const { budgetID } = useParams();
  const navigate = useNavigate();

  const { setIsEditing } = useContext(EditContext);

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

    if (item === 'name') {
      name = String(event.target.value);
      console.log(`Value is ${name}`);
    } else if (item === 'amount') {
      amount = Number(event.target.value);
      console.log(`Value is ${amount}`);
    } else if (item === 'value') {
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

  const handleSave = () => {
    // Save the envelope (update the context if you've not done it in real-time)
    setIsEditing(false);
    // Redirect to the Wallet/Envelope page
    navigate('/');
  };

  const handleCancel = () => {
    props.onEditEnd();
    // Simply redirect without saving changes
    navigate('/envelopes');
  };

  // debugger;
  // console.log("name", name);
  // console.log("amount", amount);

  console.log(`Editing Envelope budget ID is ${props.budgetID}`);
  console.log(`Editing Envelope budget index is ${budgetIndex}`);

  console.log('Editing Envelope!');

  return (
    <FormContainer>
      <Label htmlFor="name-edit">Name:</Label>
      <Input
        type="text"
        onChange={(evt) => handleChanges(evt, 'name')}
        value={inputValues.name}
        id="name-edit"
      />

      <Label htmlFor="amount-edit">Amount:</Label>
      <Input
        type="value"
        onChange={(evt) => handleChanges(evt, 'amount')}
        value={inputValues.amount}
        id="amount-edit"
      />

      <Label htmlFor="value-edit">Value:</Label>
      <Input
        type="value"
        onChange={(evt) => handleChanges(evt, 'value')}
        value={inputValues.value}
        id="value-edit"
      />

      {/* Buttons */}
      <ButtonsContainer>
        <Button onClick={handleSave}>Edit Envelope</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}
