import Dish from '../layouts/Dish';
import Menu from '../layouts/Menu';
import Sales from '../layouts/Sales';

export const Routes = [
  {
    path: "/",
    component: Dish,
    exact: true
  },
  {
    path: "/menu",
    component: Menu,
    exact: true
  },
  {
    path: "/sales",
    component: Sales,
    exact: true
  },
  {
    path: "/reports",
    component: Sales,
    exact: true
  }
];