import { ToastContainer } from "react-toastify";
import "./App.css";
import Layout from "./layouts/Layout";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/CartContex";

function App() {
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <Layout />
      </CartProvider>
    </>
  );
}

export default App;
