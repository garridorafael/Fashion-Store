// eslint-disable-next-line import/no-cycle
import { CartModalCard } from './CartModalCard';

import { IProduct } from './CartModal';

interface IProductListProps {
  products: IProduct[],
}

export function CartModalList({ products } : IProductListProps) {
  return (
    <ul>
      {
        products.map((product) => (
          <CartModalCard key={product.id} product={product} />
        ))
      }
    </ul>
  );
}
