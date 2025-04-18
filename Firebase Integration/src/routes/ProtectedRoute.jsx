import { Navigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default ProtectedRoute;