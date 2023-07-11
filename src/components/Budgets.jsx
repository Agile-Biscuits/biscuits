import styled from '@emotion/styled';
import Budget from './Budget';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function Budgets({ budgets }) {
  return (
    <Container>
      {budgets.sort((a, b) => a.value / a.amount - b.value / b.amount).map((
        { name, amount, value },
      ) => <Budget name={name} amount={amount} value={value} key={name} />)}
    </Container>
  );
}
