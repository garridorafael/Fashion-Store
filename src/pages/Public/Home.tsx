import { useEffect, useContext } from 'react';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { HomeCard } from '../../components/HomeCard';
import { Footer } from '../../components/Footer';
import { AdminContext } from '../../context/AdminContext';
import { useCart } from '../../hooks';
import { CartModal } from '../../components/Cart/CartModal';
import { Container } from '../../components/Container';

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
      <Container>
        <Header unprotected={false} />
        {isOpen ? <CartModal /> : null}
        <div className="flex flex-col mx-4 gap-x-14 items-center mt-8 lg:flex-row lg:mb-10 mb-6">
          <img src={imgUrl} alt={altText} className="max-w-full" />
          <div className="flex flex-col gap-8 lg:items-start text-center items-center  sm:items-start min-w-screen max-w-prose">
            <Heading
              classname="lg:max-w-lg max-w-[200px] lg:text-start text-5xl lg:text-8xl tracking-widest line-clamp-4"
              title="KENZIE FASHION STORE"
            />
            <Button
              className=" lg:mt-10   py-2"
              type="submit"
              title="CONFIRA AS OFERTAS"
              variant="SOLID"
            />
          </div>
        </div>
        <section className="flex flex-col gap-10 mx-4">
          <Heading title="PRODUTOS EM DESTAQUE" />
          <ul className="flex overflow-x gap-x-7 mb-10 max-w-full overflow-x-auto whitespace-nowrap ">
            {products.map((product) => (
              <HomeCard product={product} key={product.id} />
            ))}
          </ul>
        </section>
      </Container>

      <Footer />
    </>
  );
}
