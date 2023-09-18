import { useContext, useState } from 'react';
import { EditContext } from '../context/EditContext';
import styled from '@emotion/styled';

const VAULT_COLOR = 'green';

const Fill = styled.div`
  position: absolute;
  z-index: -1;
  align-self: flex-end;
  width: 100%;
  height: ${props => `${props.height}%` || 'auto'};
  background: ${VAULT_COLOR};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 7px;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  position: relative; 
`;

const VaultCardContainer = styled(Container)`
  width: 240px;
  height: 240px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
          0deg,
          ${VAULT_COLOR} ${props => props.fillPercentage}%,
          transparent ${props => props.fillPercentage}%
  );
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: transparent;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 0.5rem;  // adjust this value to move the name up or down
  display: flex;
  align-items: center;
  width: 42%;
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

const Value = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 2rem;  // adjust this value to move the '500' up or down
  font-size: 36px;
  font-weight: 600;
  color: #182B2B;
`;


const getValueWithCommas = ({
  value,
}) => (value
  ? value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  : 0);

const getVaultFillColor = () => VAULT_COLOR;

const VaultCard = ({
  name,
  goal,
  value,
}) => {
  const fillPercentage = (value / goal) * 100;
  return (
    <VaultCardContainer fillPercentage={fillPercentage} data-testid="vault">
      <InfoContainer>
        <NameContainer>
          <Name>{name ? name.toUpperCase() : 'Default Name'}</Name>
        </NameContainer>
        <Value>{`£${getValueWithCommas({ value })}`}</Value>
      </InfoContainer>
    </VaultCardContainer>
  );
};

export default VaultCard;
