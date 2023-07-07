import { useEffect, useContext } from 'react';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { MainImg } from '../../components/MainImg';
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
  return (
    <>
      <Header unprotected={false} />
      {isOpen ? <CartModal /> : null}
      <div className="flex flex-col gap-x-10 items-center mb-24 mt-8 sm:flex-row sm:mx-36 sm:gap-0 sm:justify-between pr-20 items-start ">
        <MainImg />
        <div className="flex flex-col space-y-2-375 items-center mx-6 sm:mx-0 sm:items-start">
          <Heading title="KENZIE FASHION STORE" />
          <Button className="py-2" type="submit" title="CONFIRA AS OFERTAS" variant="SOLID" />
        </div>
      </div>
      <section className="flex flex-col gap-10 mx-6 sm:mx-36">
        <Heading title="PRODUTOS EM DESTAQUE" />
        <ul className="flex overflow-x gap-x-7 mb-60">
          {products.map((product) => (
            <HomeCard product={product} key={product.id} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
