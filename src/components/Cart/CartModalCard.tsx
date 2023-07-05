import removeImg from '../../assets/remove-from-cart.svg';

// eslint-disable-next-line import/no-cycle
import { IProduct } from './CartModal';

interface CartModalCardProps {
  product: IProduct;
}

export function CartModalCard({ product }: CartModalCardProps) {
  return (
    <li className="flex justify-between items-center">
      <div>
        <img
          src={product.image}
          alt="Imagem do produto"
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between">
          <h3>{product.name}</h3>
          <p>
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      </div>
      <img
        src={removeImg}
        alt="Traço preto usado para remover produto do carrinho"
      />
    </li>
  );
}
