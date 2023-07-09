import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Public/Home';
import { AdminPage } from '../pages/Admin/AdminPage';
import { AdminProductsPage } from '../pages/Admin/AdminProductsPage';
import { ProductDetails } from '../pages/Public/ProductDetails';
import { AdminRoute } from '../components/security/AdminRoute';

export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminPage />
      </AdminRoute>
    ),
  },
  {
    path: '/admin/products',
    element: (
      <AdminRoute>
        <AdminProductsPage />
      </AdminRoute>
    ),
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
  },
]);
