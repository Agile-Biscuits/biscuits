import React from 'react';
import styled from '@emotion/styled';
import VaultsContainer from '../components/VaultsContainer';

const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  margin-bottom: 40px;
`;

const VaultPage = () => {
  return (
    <VaultsContainer />
  );
};

export default VaultPage;
