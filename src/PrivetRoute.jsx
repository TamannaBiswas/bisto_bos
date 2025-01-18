import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function PrivetRoute({ children }) {
  const { user, loading } = useAuth();
  
  const location = useLocation();
  if (loading) {
    return (
      <progress
        className="progress progress-accent w-56"
        value={0}
        max="100"
      ></progress>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace>
      PrivetRoute
    </Navigate>
  );
}
