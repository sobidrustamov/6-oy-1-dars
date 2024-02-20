import { Home } from "../pages/Home";
import { Detail } from "../pages/detail";

export const route = [
  {
    component: <Home />,
  },
  {
    component: <Detail />,
    path: "product/:id",
  },
];
