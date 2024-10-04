import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-2xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location.pathname }} replace></Navigate>
  );
};

export default PrivateRoute;
