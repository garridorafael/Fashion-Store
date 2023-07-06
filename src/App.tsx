import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { AdminProvider } from './context/AdminContext';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <AdminProvider>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </AdminProvider>
  );
}
