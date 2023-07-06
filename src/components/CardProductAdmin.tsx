import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useState } from 'react';
import { EditProduct } from './EditModal';

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
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<{
  //   image: string;
  //   description: string;
  //   name: string;
  //   price: number;
  //   id?: number | undefined;
  // } | null>(null);

  const openEditModal = () => {
    if (product) {
      // setSelectedProduct(product);
      setIsOpen(true);
    }
  };

  const onClose = () => {
    setIsOpen(false);
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
        <button>
          <BsTrash3 />
        </button>
        <button onClick={openEditModal}>
          <MdOutlineModeEditOutline />
        </button>
        {isOpen && <EditProduct isOpen={isOpen} onClose={onClose} />}
      </div>
    </li>
  );
}
