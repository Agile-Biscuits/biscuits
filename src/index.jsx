import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/ErrorPage';
import BudgetsPage from './pages/BudgetsPage';
import EnvelopePage from './pages/EnvelopePage';
import AddEnvelopePage from './pages/AddEnvelopePage';
import EditEnvelopePage from './pages/EditEnvelopePage';
import TransactionPage from './pages/TransactionsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <BudgetsPage />,
      },
      {
        path: '/envelopes',
        element: <EnvelopePage />,
        children: [
          {
            path: 'add',
            element: <AddEnvelopePage />,
          },
          {
            path: 'edit/:budgetID',
            element: <EditEnvelopePage />,
          }
        ],
      },
      {
        path: '/transactions',
        element: <TransactionPage />,
        children: [
          {
            path: ':budgetName',
            element: <TransactionPage />,
          },
        ],
      },
    ],
  },
]);
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
