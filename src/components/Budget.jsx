import styled from '@emotion/styled';

const getFillHeight = ({ amount, value }) => {
  const percentage = (value / amount);

  return percentage > 1 ? 198 : percentage * 200 - 2;
};
const getFillColor = ({
  amount, value,
}) => {
  const ratio = value / amount;

  if (ratio > 1) return 'cornflowerblue';

  return value / amount > 0.2
    ? 'lightseagreen'
    : '#FF6347';
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 92%;
  height: 100px;
  background: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 16px;
    left: 12px;
    font-size: 20px;
    font-weight: 500;
    color: #182B2B;
    text-shadow: -1px -1px 0 rgba(255,255,255,0.2),
      1px -1px 0 rgba(255,255,255,0.2),
      -1px 1px 0 rgba(255,255,255,0.2),
      1px 1px 0 rgba(255,255,255,0.2);
    content: '${({ name }) => name}';
  }

  &::after {
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 36px;
    font-weight: 800;
    color: #182B2B;
    text-shadow: -1px -1px 0 rgba(255,255,255,0.2),
      1px -1px 0 rgba(255,255,255,0.2),
      -1px 1px 0 rgba(255,255,255,0.2),
      1px 1px 0 rgba(255,255,255,0.2);
    content: '${({ value }) => value}';
  }
`;
const Fill = styled.div`
  align-self: flex-end;
  width: 100%;
  height: ${getFillHeight}px;
  background: ${getFillColor};
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 7px;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.25);
`;

export default function Budget({ name, amount, value }) {
  return (
    <Container name={name} value={value}>
      <Fill amount={amount} value={value} />
    </Container>
  );
}
