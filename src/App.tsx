import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export { router };
