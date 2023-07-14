import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/loginPage" state={{ from: location }} replace />;
  }

  return children;
}