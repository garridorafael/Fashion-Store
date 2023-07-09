import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { numberToBrl } from '../helpers/numberToBrl';
import { IProduct } from './Cart/CartModal';
import cartImage from '../assets/Group4.svg';
import { useCart } from '../hooks';

interface HomeCardProps {
  product: IProduct;
}

export function HomeCard({ product }: HomeCardProps) {
  const { setCartProducts } = useCart();

  function AddToCart(productCart: IProduct) {
    setCartProducts((prevProducts) => [...prevProducts, productCart]);
    toast.success('O produto foi adicionado ao carrinho');
  }
  return (
    <li className="flex flex-col justify-between gap-9 lg:w-80 min-w-[220px]">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt="Imagem do produto"
          className="flex w-full rounded-20 h-64 lg:h-80"
        />
      </Link>
      <div className="flex flex-col gap-4 w-9/12">
        <h3 className="font-bold">{product.name}</h3>
        <p className="font-semibold">{numberToBrl(product.price)}</p>
        <div className="flex gap-6 items-center">
          <button onClick={() => AddToCart(product)}>
            <img
              src={cartImage}
              alt="Imagem desenho animado carrinho de compras"
            />
          </button>
          <Link to={`/product/${product.id}`}>
            <p className="text-start text-sm">SAIBA MAIS</p>
          </Link>
        </div>
      </div>
    </li>
  );
}
