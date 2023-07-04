import removeImg from '../../../assets/Vector (1).svg';

// eslint-disable-next-line import/no-cycle
import { IProduct } from './CartModal';

interface IProductListProps {
  products: IProduct[],
}

export function CartModalCard({ products } : IProductListProps) {
  return (
    <ul>
      {
        products.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            <div>
              <img src={product.image} alt="Imagem do produto" className="rounded-lg" />
              <div className="flex flex-col justify-between">
                <h3>{product.name}</h3>
                <p>{(product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
              </div>
            </div>
            <img src={removeImg} alt="Traço preto usado para remover produto do carrinho" />
          </li>
        ))
      }
    </ul>
  );
}
