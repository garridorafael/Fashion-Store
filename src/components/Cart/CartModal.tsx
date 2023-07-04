import { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { CartModalList } from './CartModalList';

export interface IProduct {
  id: number,
  name: string,
  price: number,
  description: string,
  image: string,
}

export function CartModal() {
  const [products, setProducts] = useState<IProduct[]>([]);

  setProducts([{
    id: 1,
    name: 'Blazer Branco Elegante',
    price: 490,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.',
    image: 'https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_4_hwrkgf.jpg',
  }]);

  return (
    <div role="dialog" className="position: fixed flex items-start justify-end w-full h-screen inset-0">
      <div className="relative w-full max-w-screen-sm flex flex-col p-4 justify-end">
        <div>
          <button type="submit" className="absolute top-2 right-2">X</button>
          <h2>CARRINHO</h2>
          <CartModalList products={products} />
        </div>
        <p>Total:</p>
      </div>
    </div>
  );
}
