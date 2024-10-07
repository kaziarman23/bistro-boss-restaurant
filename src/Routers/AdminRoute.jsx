import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import UseAdmin from "../Pages/Shared/IsAdmin/UseAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const { user, loading } = useContext(AuthContext);

  if (loading || isAdminLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-2xl"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location.pathname }} replace></Navigate>
  );
};

export default AdminRoute;
