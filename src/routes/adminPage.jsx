import { useLocation, Navigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export function AdminPage({ children }) {
  const { username } = useUserStore();

  let location = useLocation();

  if (!username) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
