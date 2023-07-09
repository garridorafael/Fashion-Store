import { useEffect, useContext } from 'react';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { ImgComponent } from '../../components/ImgComponent';
import { Button } from '../../components/Button';
import { HomeCard } from '../../components/HomeCard';
import { Footer } from '../../components/Footer';
import { AdminContext } from '../../context/AdminContext';
import { useCart } from '../../hooks';
import { CartModal } from '../../components/Cart/CartModal';

export default function Home() {
  const { products, getProducts } = useContext(AdminContext);
  const { isOpen } = useCart();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const imgUrl = 'https://github.com/grupo6-tsunode/fashion-store/blob/main/src/assets/login_highlight.png?raw=true';
  const altText = 'Girls wearing clothing';

  return (
    <>
      <Header unprotected={false} />
      {isOpen ? <CartModal /> : null}
      <div className="flex flex-col gap-x-10 items-center mb-24 mt-8 sm:flex-row sm:mx-36 sm:gap-0 sm:justify-between pr-20 items-start ">
        <ImgComponent src={imgUrl} alt={altText} />
        <div className="flex flex-col space-y-2-375 items-center mx-6 sm:mx-0 sm:items-start">
          <Heading title="KENZIE FASHION STORE" />
          <Button className="py-2" type="submit" title="CONFIRA AS OFERTAS" variant="SOLID" />
        </div>
      </div>
      <section className="flex flex-col gap-10 mx-6 sm:mx-36">
        <Heading title="PRODUTOS EM DESTAQUE" />
        <ul className="flex overflow-x gap-x-7 mb-60 max-w-full overflow-x-auto whitespace-nowrap ">
          {products.map((product) => (
            <HomeCard product={product} key={product.id} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
