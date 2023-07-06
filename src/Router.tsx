import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { AdminProvider } from './context/AdminContext';

export default function Router() {
  return (
    <AdminProvider>
      <RouterProvider router={routes} />
    </AdminProvider>
  );
}
