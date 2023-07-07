import { useContext, useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { EditProduct } from './EditModal';
import { IProduct } from './Cart/CartModal';
import { AdminContext } from '../context/AdminContext';

interface CardAdminProps {
  product: {
    image: string;
    description: string;
    name: string;
    price: number;
    id?: number;
  };
}

export function ProductCardAdmin({ product }: CardAdminProps) {
  const { deleteProduct } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(undefined);

  const openEditModal = (productEdit: IProduct) => {
    if (productEdit) {
      const productWithId = { ...productEdit, id: product.id };
      setSelectedProduct(productWithId);
      setIsOpen(true);
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleDelete = (productDelete: IProduct) => {
    setSelectedProduct(productDelete);
    if (selectedProduct && selectedProduct.id) {
      try {
        toast.custom(
          (t) => (
            <div
              key={t.id}
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="ml-3 flex-1">
                    <p className="mt-1 text-sm text-gray-500">
                      Deseja mesmo excluir esse produto?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    deleteProduct(selectedProduct.id!);
                    toast.dismiss(t.id);
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sim
                </button>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Não
                </button>
              </div>
            </div>
          ),
          {
            duration: 0,
            style: {
              background: '#333',
              color: '#fff',
            },
          },
        );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.message, {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
      }
    }
  };

  return (
    <li className="h-[210px] min-w-[360px] max-w-[650px] flex flex-row basis-[40%] grow justify-between items-center box-border">
      <div className="flex items-center gap-4">
        <img src={product.image} alt={product.description} className="h-[210px]" />

        <div className="flex flex-col">
          <span className="font-bold text-[1.1875rem]">{product.name}</span>
          <span>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <button onClick={() => handleDelete(product)}>
          <BsTrash3 />
        </button>
        <button onClick={() => product && openEditModal(product)}>
          <MdOutlineModeEditOutline />
        </button>

        {isOpen && <EditProduct isOpen={isOpen} onClose={onClose} product={selectedProduct} />}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </li>
  );
}
