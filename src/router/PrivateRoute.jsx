import { toast } from "react-toastify";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    
    toast.error("Please login", {
      position: "top-center",
    });
    return null;
  }

 
  return element;
};

export default PrivateRoute;
