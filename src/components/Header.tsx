import logo from '../assets/FASHIONSTORE.svg';
import cartImage from '../assets/SHOPPINGCART.svg';
import { useCart } from '../hooks';

interface IUnprotected {
  unprotected?: boolean;
}

export function Header({ unprotected }: IUnprotected) {
  const { openModal } = useCart();

  return (
    <header className="flex justify-between items-center mx-6 mt-6 sm:mx-36">
      <img src={logo} alt="Logo da Fashion Store - Escrito FASHION STORE em preto" />
      {unprotected ? null
        : (
          <button onClick={openModal}>
            <img src={cartImage} alt="Desenho animado em preto e branco de carrinho de compras" />
          </button>
        )}
    </header>
  );
}
