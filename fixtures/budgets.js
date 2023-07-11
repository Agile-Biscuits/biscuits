import Budget from '../src/models/Budget';

const budgets = [
  new Budget({
    name: 'Food',
    amount: 100,
    value: 80,
  }),
  new Budget({
    name: 'Shopping',
    amount: 200,
    value: 224,
  }),
  new Budget({
    name: 'Utilities',
    amount: 100,
    value: 36,
  }),
  new Budget({
    name: 'Hobbies',
    amount: 50,
    value: 8,
  }),
];

export default budgets;
