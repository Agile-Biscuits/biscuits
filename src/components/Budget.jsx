import styled from '@emotion/styled';

const COLORS = {
  excessive: 'cornflowerblue',
  healthy: 'lightseagreen',
  low: '#FF6347',
};

const getFillHeight = ({ amount, value }) => {
  const HEIGHT_BASE = 200;
  const HEIGHT_OFFSET = 2;
  const percentage = (value / amount);
  return percentage > 1
    ? HEIGHT_BASE - HEIGHT_OFFSET
    : percentage * HEIGHT_BASE - HEIGHT_OFFSET;
};
const getFillColor = ({
  amount, value,
}) => {
  const HEALTHY_RATIO_THRESHOLD = 0.2;
  const ratio = value / amount;
  if (ratio > 1) return COLORS.excessive;
  return ratio > HEALTHY_RATIO_THRESHOLD ? COLORS.healthy : COLORS.low;
};
const getValueWithCommas = ({
  value,
}) => (value
  ? value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  : 0);

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
`;

const Name = styled.div`
  position: absolute;
  top: 16px;
  left: 12px;
  font-size: 20px;
  font-weight: 500;
  color: #182B2B;
`;

const Value = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 36px;
  font-weight: 600;
  color: #182B2B;
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
    <Container data-testid="budget">
      <Name>{name}</Name>
      <Value>{`£${getValueWithCommas({ value })}`}</Value>
      <Fill amount={amount} value={value} />
    </Container>
  );
}
