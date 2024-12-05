import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UploadProduct from "../pages/UploadProduct";

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
    ],
  },
]);

export default router;
