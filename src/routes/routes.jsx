import Root from "./root";
import ErrorPage from "../pages/ErrorPage";
import BudgetsPage from "../pages/BudgetsPage";
import EnvelopePage from "../pages/EnvelopePage";
import AddEnvelopePage from "../pages/AddEnvelopePage";

export const routes = [
  {
    path: '/',
    component: Root,
    exact: true,
  },
  {
    path: '/budgets',
    component: BudgetsPage,
    exact: true,
  },
  {
    path: '/envelopes',
    component: EnvelopePage,
    exact: true,
  },
  {
    path: '/envelopes/add',
    component: AddEnvelopePage,
    exact: true,
  },
  {
    path: '*',
    component: ErrorPage,
  },
];