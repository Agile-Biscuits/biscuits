// Using your provided VaultsContainer code.
import React from 'react';
import styled from '@emotion/styled';
import VaultCard from './VaultCard';
import vaults from '../../fixtures/vaults';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const VaultsContainer = () => {
  return (
    <Container>
      {vaults.map(vault => (
        <VaultCard
          key={vault.id}
          name={vault.name}
          goal={vault.goal}
          value={vault.value}
        />
      ))}
    </Container>
  );
};

export default VaultsContainer;
