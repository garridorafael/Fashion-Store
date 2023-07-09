import { numberToBrl } from '../helpers/numberToBrl';
import { IProduct } from './Cart/CartModal';
import { Paragraph } from './Paragraph';
import cartImage from '../assets/Group4.svg';
import { useCart } from '../hooks';

interface HomeCardProps {
  product: IProduct;
}

export function HomeCard({ product }: HomeCardProps) {
  const { setCartProducts } = useCart();

  function AddToCart(productCart: IProduct) {
    setCartProducts((prevProducts) => [...prevProducts, productCart]);
  }
  return (
    <li className="flex flex-col p-1 justify-between gap-9 min-w-fit sm:w-20-75 ">
      <img
        src={product.image}
        alt="Imagem do produto"
        className="flex w-full h-2/4 rounded-20 h-80 w-72 sm:w-20-75 sm:h-23-9375"
      />
      <div className="flex flex-col gap-9 w-9/12">
        <h3>{product.name}</h3>
        <p>{numberToBrl(product.price)}</p>
        <div className="flex justify-between items-center">
          <button onClick={() => AddToCart(product)}>
            <img
              src={cartImage}
              alt="Imagem desenho animado carrinho de compras"
            />
          </button>
          <Paragraph text="Saiba mais" />
        </div>
      </div>
    </li>
  );
}
