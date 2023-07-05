import { BsTrash3 } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';

interface CardAdminProps {
  productImage: string;
  productDescription: string;
  productName: string;
  productPrice: string;
}

export function ProductCardAdmin({
  productImage,
  productDescription,
  productName,
  productPrice,
}: CardAdminProps) {
  return (
    <li>
      <div>
        <img src={productImage} alt={productDescription} />
      </div>
      <div>
        <span>{productName}</span>
        <span>{productPrice}</span>
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
