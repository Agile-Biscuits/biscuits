const budgets = [
  {
    id: 1,
    name: 'Food',
    amount: 100,
    value: 100,
    transactions: [
      { type: 'top-up', date: 'YYYY-MM-DD', amount: 50, description: 'Weekly allowance' },
      { type: 'spend', date: 'YYYY-MM-DD', amount: -25, description: 'Vegetables' },
    ]
  },
  {
    id: 2,
    name: 'Shopping',
    amount: 200,
    value: 572293284,
    transactions: []
  },
  {
    id: 3,
    name: 'Utilities',
    amount: 100,
    value: 36.29,
    transactions: []
  },
  {
    id: 4,
    name: 'Hobbies',
    amount: 50,
    value: 8,
    transactions: []
  },
];


export default budgets;
