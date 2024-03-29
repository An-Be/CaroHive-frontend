import { createBrowserRouter } from "react-router-dom";
import { Shop } from "../components/Shop/Shop";
import { About } from "../components/About/About";
import { Cart } from "../components/Cart";
import Hero from "../components/Hero/Hero";
import App from "../App";
import { LoginPage } from "../components/Login/Index";
import SingleProduct from "../components/Shop/components/singleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
