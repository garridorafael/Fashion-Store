import { toast } from 'react-hot-toast';
import { numberToBrl } from '../../helpers/numberToBrl';
import removeImg from '../../assets/remove-from-cart.svg';
// eslint-disable-next-line import/no-cycle
import { useCart } from '../../hooks';

import { IProduct } from './CartModal';

interface CartModalCardProps {
  product: IProduct;
}

export function CartModalCard({ product }: CartModalCardProps) {
  const { cartProducts, setCartProducts } = useCart();

  function removeFromCart(id: number | undefined) {
    if (id === undefined) {
      return;
    }
    const newCartProducts = cartProducts.filter((cartProduct) => cartProduct.id !== id);
    setCartProducts(newCartProducts);
    toast.success('O produto foi removido com sucesso');
  }
  return (
    <li className="flex justify-between items-center">
      <div className="flex gap-7">
        <img
          src={product.image}
          alt="Imagem do produto"
          className="rounded-10 w-20 h-20"
        />
        <div className="flex flex-col justify-between">
          <h3>{product.name}</h3>
          <p>{numberToBrl(product.price)}</p>
        </div>
      </div>
      <button onClick={() => removeFromCart(product.id)}>
        <img
          src={removeImg}
          alt="Traço preto usado para remover produto do carrinho"
        />
      </button>
    </li>
  );
}
