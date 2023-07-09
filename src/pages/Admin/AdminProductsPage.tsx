import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import addIcon from '../../assets/add_circle_FILL0_wght400_GRAD0_opsz48 1.svg';
import { AdminContext } from '../../context/AdminContext';
import { ProductCardAdmin } from '../../components/CardProductAdmin';
import { RegisterProduct } from '../../components/RegisterModal';
import { Header } from '../../components/Header';

export function AdminProductsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { products, getProducts } = useContext(AdminContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const openModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header unprotected />
      <div className="container px-4 max-w-[1200px] mx-auto box-border">
        <nav className="flex gap-3 my-[30px]">
          <Button
            type="button"
            variant="OUTLINE"
            className="text-xl leading-8 font-heading uppercase font-medium border-none pl-0"
            title="inicio"
            onClick={() => navigate('/admin')}
          />
          <Button
            type="button"
            variant="OUTLINE"
            className="text-xl leading-8 font-heading uppercase font-medium border-none px-0"
            title="produtos"
            onClick={() => navigate('/adminProducts')}
          />
        </nav>
        <div className="flex flex-wrap justify-between items-center mb-5">
          <div>
            <Heading title="produtos" />
            <Paragraph
              text="Gerencie os produtos do catálogo"
              className="my-[30px]"
            />
          </div>
          <div>
            <Button
              icon={<img src={addIcon} alt="Ícone de adicionar" />}
              title="NOVO PRODUTO"
              variant="SOLID"
              type="button"
              onClick={openModal}
            />
          </div>
          {isOpen && <RegisterProduct isOpen={isOpen} onClose={onClose} />}
        </div>
        <main className="max-h-full">
          <ul className="flex flex-wrap justify-between gap-6 box-content max-h-full">
            {products.map((product) => (
              <ProductCardAdmin product={product} key={product.id} />
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}
