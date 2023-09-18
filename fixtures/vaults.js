const vaults = [
  {
    id: "123456789",
    name: "Savings Vault",
    goal: 1000,
    value: 500,
    createdDate: "2023-01-01T12:00:00Z",
    lastUpdated: "2023-09-17T14:45:00Z",
    transactions: [
      {
        id: "t1",
        description: "Initial deposit",
        amount: 200,
        transactionDate: "2023-01-02T09:30:00Z",
        type: "deposit"
      },
      {
        id: "t2",
        description: "Monthly saving",
        amount: 150,
        transactionDate: "2023-02-01T09:30:00Z",
        type: "deposit"
      },
      {
        id: "t3",
        description: "Birthday gift",
        amount: 150,
        transactionDate: "2023-03-15T14:15:00Z",
        type: "deposit"
      }
    ],
    notes: "Savings for a new laptop"
  }
]
export default vaults;
