import { useEffect, useRef } from 'react';

import { MdClose } from 'react-icons/md';
// eslint-disable-next-line import/no-cycle
import { CartModalCard } from './CartModalCard';
import { Heading } from '../Heading';
// eslint-disable-next-line import/no-cycle
import { useCart } from '../../hooks';
import { Paragraph } from '../Paragraph';
import { numberToBrl } from '../../helpers/numberToBrl';

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export function CartModal() {
  const { closeModal, cartProducts } = useCart();

  const empty = cartProducts[0] === undefined;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutclick = (event: MouseEvent) => {
      if (modalRef.current === event.target) {
        closeModal();
      }
    };

    window.addEventListener('mousedown', handleOutclick as EventListener);

    return () => {
      window.removeEventListener('mousedown', handleOutclick as EventListener);
    };
  }, [closeModal]);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [closeModal]);

  const totalPrice = cartProducts.reduce(
    (prevVal, currentProd) => prevVal + currentProd.price,
    0,
  );

  return (
    <div
      ref={modalRef}
      role="dialog"
      className="position: fixed flex justify-center bg-custom-gray items-start w-full h-screen inset-0 sm:justify-end p-4 sm:p-0"
    >
      <div className="relative w-full max-w-screen-sm flex flex-col shadow-sm p-4 justify-end bg-white justify-between sm:max-h-1/2">
        {empty ? (
          <Paragraph text="O carrinho está vazio" />
        ) : (
          <>
            <div>
              <button
                ref={buttonRef}
                onClick={closeModal}
                type="submit"
                className="absolute top-4 right-4"
              >
                <MdClose size={40} />
              </button>
              <Heading title="CARRINHO" classname="text-3xl" />
              <ul className="flex flex-col h-full gap-12 mt-8 max-h-full overflow-y-auto whitespace-nowrap">
                {cartProducts.map((product) => (
                  <CartModalCard product={product} key={product.id} />
                ))}
              </ul>
            </div>
            <div className="flex gap-1.5 mt-4">
              <p>TOTAL:</p>
              <p>{numberToBrl(totalPrice)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
