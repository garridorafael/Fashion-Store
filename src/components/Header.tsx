import logo from '../assets/FASHIONSTORE.svg';
import cartImage from '../assets/SHOPPINGCART.svg';

export function Header() {
  return (
    <header className="flex justify-between items-center mx-6 mt-6 sm:mx-36">
      <img src={logo} alt="Logo da Fashion Store - Escrito FASHION STORE em preto" />
      <img src={cartImage} alt="Desenho animado em preto e branco de carrinho de compras" />
    </header>
  );
}
