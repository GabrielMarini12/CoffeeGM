import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

export { router };
