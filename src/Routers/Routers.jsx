import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
    ],
  },
]);
