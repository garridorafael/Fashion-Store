import { useState, useEffect } from 'react';
import { Header } from '../../../components/Header';
import { Heading } from '../../../components/Heading';
import { Button } from '../../../components/Button';
import imageLogin from '../../assets/login_highlight.png';
import { IProduct } from '../../../components/Cart/CartModal';
import { HomeCard } from './HomeCard';
import { Footer } from '../../../components/Footer';

export default function Home() {
  const [products2, setProducts2] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts2([
      {
        id: 1,
        name: 'Blazer Branco Elegante',
        price: 490,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.',
        image:
          'https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_4_hwrkgf.jpg',
      },
      {
        id: 2,
        name: 'Blazer Laranja',
        price: 320,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.',
        image: 'https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_7_ofhcmq.jpg',
      },
      {
        id: 3,
        name: 'Sapatos Amarelo',
        price: 490,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin massa metus, tempus nec ex ac, condimentum convallis diam. Donec at nisi lorem. Aliquam non dolor bibendum, venenatis ante ac, lobortis justo. Vestibulum nec pretium mi, eu consequat dolor.',
        image: 'https://res.cloudinary.com/dsbkp5841/image/upload/v1687807062/Rectangle_6_p53ulc.jpg',
      },
    ]);
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col w-full gap-x-10 items-center mb-24 mt-8 sm:flex-row sm:mx-36 sm:gap-0 sm:justify-start items-start sm:gap-16">
        <img
          src={imageLogin}
          className="w-21-375 h-18-875 mx-6 sm:w-59-0625 sm:h-143-1875 sm:gap-0 sm:mx-0"
          alt="Imagem de uma mulher usando um blazer branco"
        />
        <div className="flex flex-col w-full space-y-2-375 items-center mx-6 sm:mx-0 sm:items-start">
          <Heading title="KENZIE FASHION STORE" />
          <Button
            className="py-2"
            type="submit"
            title="CONFIRA AS OFERTAS"
            variant="SOLID"
          />
        </div>
      </div>
      <section className="flex flex-col gap-10 mx-6 sm:mx-36">
        <Heading title="PRODUTOS EM DESTAQUE" />
        <ul className="flex overflow-x gap-x-7 mb-60">
          {products2.map((product) => (
            <HomeCard product={product} key={product.id} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
