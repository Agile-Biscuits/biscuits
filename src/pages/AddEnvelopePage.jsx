import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { BudgetsContext } from '../context/BudgetsContext';

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
  // const { addBudget } = useContext(BudgetsContext);
  //
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    //   event.preventDefault();
    //
    //   // Create a new budget
    //   const newBudget = {
    //     name,
    //     amount,
    //   };
    //
    //   // Add the new budget
    //   addBudget(newBudget);
  };

  debugger;
  console.log('name', name);
  console.log('amount', amount);

  return (
    <Container>
      <h1>Envelope Page</h1>
    </Container>
  );
}
