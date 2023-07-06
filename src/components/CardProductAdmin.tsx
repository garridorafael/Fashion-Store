import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';

interface CardAdminProps {
  product: {
    image: string;
    description: string;
    name: string;
    price: number;
    id: number;
  };
}

export function ProductCardAdmin({ product }: CardAdminProps) {
  return (
    <li>
      <div>
        <img src={product.image} alt={product.description} />
      </div>
      <div>
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <div>
        <button>
          <BsTrash3 />
        </button>
        <button>
          <MdOutlineModeEditOutline />
        </button>
      </div>
    </li>
  );
}
