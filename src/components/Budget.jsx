import { useContext } from 'react';
import { PiPencilSimpleBold } from 'react-icons/pi';
import styled from '@emotion/styled';
import { EditContext } from '../context/EditContext';

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
  justify-content: space-between;
  align-items: center;
  width: 92%;
  height: 100px;
  background: transparent;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: transparent;
`;

const Name = styled.div`
  margin-left: 1rem;
  padding: 0.3rem 0.35rem 0.25rem 0.55rem;
  font-size: 16px;
  font-weight: 300;
  text-shadow: -1px -1px 0 rgba(255,255,255,0.2),
    1px -1px 0 rgba(255,255,255,0.2),
    -1px 1px 0 rgba(255,255,255,0.2),
    1px 1px 0 rgba(255,255,255,0.2);
  letter-spacing: 4px;
  color: #ffffff;
  background: #182B2B;
`;

const IconContainer = styled.div`
  position: relative;
  margin-left: 0.5rem;
`;

const EditIcon = styled(PiPencilSimpleBold)`
  cursor: pointer;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 1rem;
  display: flex;
  align-items: center;
  width: 42%;
`;

const Value = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 0.75rem;
  font-size: 36px;
  font-weight: 600;
  color: #182B2B;
`;

const Fill = styled.div`
  position: absolute;
  z-index: -1;
  align-self: flex-end;
  width: 100%;
  height: ${getFillHeight}px;
  background: ${getFillColor};
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 7px;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.25);
`;

export default function Budget({ name, amount, value }) {
  const { isEditing } = useContext(EditContext);
  return (
    <Container data-testid="budget">
      <Fill amount={amount} value={value} />
      <InfoContainer>
        <NameContainer>
          <Name>{name.toUpperCase()}</Name>
          {isEditing
          && (
            <IconContainer data-testid="edit-icon">
              <EditIcon />
            </IconContainer>
          )}
        </NameContainer>
        <Value>{`£${getValueWithCommas({ value })}`}</Value>
      </InfoContainer>
    </Container>
  );
}
