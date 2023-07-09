import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../hooks';

interface AdminRouteProps {
  children: React.ReactNode;
}

export function AdminRoute({ children }: AdminRouteProps) {
  const { user } = useAdmin();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
