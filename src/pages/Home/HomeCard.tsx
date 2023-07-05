import { numberToBrl } from '../../helpers/numberToBrl';
import { IProduct } from '../../components/Cart/CartModal';
import { Paragraph } from '../../components/Paragraph';
import cartImage from '../../assets/Group 4.svg';

interface HomeCardProps {
  product: IProduct;
}

export function HomeCard({ product }: HomeCardProps) {
  return (
    <li className="flex flex-col justify-between gap-9 w-72 sm:w-20-75">
      <img
        src={product.image}
        alt="Imagem do produto"
        className="flex w-full h-2/4 rounded-20 h-80 w-72 sm:w-20-75 sm:h-23-9375"
      />
      <div className="flex flex-col gap-9 w-9/12">
        <h3>{product.name}</h3>
        <p>{numberToBrl(product.price)}</p>
        <div className="flex justify-between items-center">
          <img
            src={cartImage}
            alt="Imagem desenho animado carrinho de compras"
          />
          <Paragraph text="Saiba mais" />
        </div>
      </div>
    </li>
  );
};