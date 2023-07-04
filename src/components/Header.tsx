import logo from '../../../assets/FAshionSTORE.png';
import cartImage from '../../../assets/shopping_cart_FILL0_wght400_GRAD0_opsz48 1.png';

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="Logo da Fashion Store - Escrito FASHIONSTORE em preto" />
      <img src={cartImage} alt="Desenho animado em preto e branco de carrinho de compras" />
    </header>
  );
}
