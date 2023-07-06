import {
  createContext, useState, useCallback, useMemo,
} from 'react';
// eslint-disable-next-line import/no-cycle
import { IProduct } from '../components/Cart/CartModal';

interface ICartContext {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  cartProducts: IProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
      cartProducts,
      setCartProducts,
    }),
    [
      isOpen,
      openModal,
      closeModal,
      cartProducts,
      setCartProducts,
    ],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}
