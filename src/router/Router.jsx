import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UploadProduct from "../pages/UploadProduct";
import Shop from "../pages/Shop";
import SingleProdcut from "../pages/SingleProdcut";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/uploadProduct",
        element: <UploadProduct />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/singleProduct/:id",
        element: <SingleProdcut />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
