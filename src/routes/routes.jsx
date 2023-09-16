import Root from "./root";
import ErrorPage from "../pages/ErrorPage";
import BudgetsPage from "../pages/BudgetsPage";
// import EnvelopePage from "./pages/EnvelopePage";

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
  // {
  //   path: '/envelopes',
  //   component: EnvelopePage,
  //   exact: true,
  // },
  {
    path: '*',
    component: ErrorPage,
  },
];