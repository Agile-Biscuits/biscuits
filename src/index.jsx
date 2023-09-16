import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import BudgetsPage from './pages/BudgetsPage';

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
    ],
  },
]);
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <RouterProvider router={router} />,
);
