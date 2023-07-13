import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/ErrorPage';
import BudgetsPage from './pages/BudgetsPage';
import EnvelopePage from "./pages/EnvelopePage";
import AddEnvelopePage from "./pages/AddEnvelopePage";

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
      },
      {
        path: '/envelopes/add',
        component: <AddEnvelopePage />
      },
    ],
  },
]);
const container = document.getElementById('app');
const root = createRoot(container);


root.render(
  <RouterProvider router={router} />,
);
