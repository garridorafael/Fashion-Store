import { useContext, useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';
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
      // eslint-disable-next-line no-restricted-globals, no-alert
      confirm('Deseja excluir esse produto?');
      deleteProduct(selectedProduct.id);
    }
  };
  return (
    <li className="h-[210px] max-w-[650px] flex flex-row grow justify-between items-center">
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
    </li>
  );
}
