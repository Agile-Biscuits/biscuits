import Budget from '../src/models/Budget';

const budgets = [
  new Budget({
    name: 'Food',
    amount: 100,
    value: 100,
    id: 1,
  }),
  new Budget({
    name: 'Shopping',
    amount: 200,
    value: 572293284,
    id: 2,
  }),
  new Budget({
    name: 'Utilities',
    amount: 100,
    value: 36.29,
    id: 3,
  }),
  new Budget({
    name: 'Hobbies',
    amount: 50,
    value: 8,
    id: 4,
  }),
];

export default budgets;
