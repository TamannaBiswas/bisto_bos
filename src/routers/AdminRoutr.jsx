import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

export default function AdminRoutr({ children }) {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  // console.log(isAdmin, isAdminLoading);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress progress-accent w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to="/" state={{ from: location }} replace>
      PrivetRoute
    </Navigate>
  );
}
