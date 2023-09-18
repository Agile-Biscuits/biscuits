import React from 'react';
import vaults from 'path_to_your_vaults_model';
import VaultCard from 'path_to_your_VaultCard_component';

function VaultList() {
  return (
    <div>
      {vaults.map(vault => (
        <VaultCard
          key={vault.id}
          name={vault.name}
          goal={vault.goal}
          value={vault.value}
        />
      ))}
    </div>
  );
}

export default VaultList;
