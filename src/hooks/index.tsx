import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { AdminContext } from '../context/AdminContext';
import { CartContext } from '../context/CartContext';

export function useAdmin() {
  const context = useContext(AdminContext);

  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }

  return context;
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within an CartProvider');
  }

  return context;
}
