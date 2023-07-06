import {
  createContext, useState, useCallback, useMemo,
} from 'react';
import { api } from '../services/api';
// eslint-disable-next-line import/no-cycle
import { IProduct } from '../components/Cart/CartModal';

interface IAdminContext {
  user: IUser | null;
  products: IProduct[];
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  getProducts: () => Promise<void>;
  addProduct: (product: IProduct) => Promise<void>;
  editProduct: (id: number, updatedProduct: IProduct) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const AdminContext = createContext<IAdminContext>({} as IAdminContext);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);

  const login = useCallback(async (data: LoginData) => {
    const response = await api.post('/login', data);
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    const response = await api.post('/users', data);
    setUser(response.data.user);
  }, []);

  const getProducts = useCallback(async () => {
    const response = await api.get('/products');
    setProducts(response.data);
  }, []);

  const addProduct = useCallback(async (product: IProduct) => {
    const response = await api.post('/products', product);
    setProducts((prevProducts) => [...prevProducts, response.data]);
  }, []);

  const editProduct = useCallback(
    async (id: number, updatedProduct: IProduct) => {
      const response = await api.put(`/products/${id}`, updatedProduct);
      // eslint-disable-next-line max-len
      setProducts((prevProducts) => prevProducts.map((product) => (product.id === id ? response.data : product)));
    },
    [],
  );

  const deleteProduct = useCallback(async (id: number) => {
    await api.delete(`/products/${id}`);
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      user,
      products,
      login,
      register,
      getProducts,
      addProduct,
      editProduct,
      deleteProduct,
    }),
    [
      user,
      products,
      login,
      register,
      getProducts,
      addProduct,
      editProduct,
      deleteProduct,
    ],
  );

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}
