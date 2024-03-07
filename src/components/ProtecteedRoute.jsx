import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem("auth");
    console.log(token);
    return !!token;
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      alert("You need to login to access this page!");
      navigate("/");
    }
  }, []);

  return isAuthenticated() ? children : null;
}

export default ProtectedRoute;
