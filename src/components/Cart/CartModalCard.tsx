import removeImg from '../../../../assets/remove_FILL0_wght400_GRAD0_opsz48 2.png';
// eslint-disable-next-line import/no-cycle
import { IProduct } from './CartModal';

interface IProductCardProps {
  product: IProduct,
}

export function CartModalCard({ product } : IProductCardProps) {
  const formatedPrice = (product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return (
    <li className="flex justify-between items-center">
      <div>
        <img src={product.image} alt="Imagem do produto" className="rounded-lg" />
        <div className="flex flex-col justify-between">
          <h3>{product.name}</h3>
          <p>{formatedPrice}</p>
        </div>
      </div>
      <img src={removeImg} alt="Traço preto usado para remover produto do carrinho" />
    </li>
  );
}
