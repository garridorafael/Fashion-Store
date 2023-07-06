import {
  useContext, useEffect, useState,
} from 'react';
import { Heading } from '../../components/Heading';
import logo from '../../assets/FASHIONSTORE.svg';
import { Paragraph } from '../../components/Paragraph';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import addIcon from '../../assets/add_circle_FILL0_wght400_GRAD0_opsz48 1.svg';
import { AdminContext } from '../../context/AdminContext';
import { ProductCardAdmin } from '../../components/CardProductAdmin';
import { RegisterProduct } from '../../components/RegisterModal';

export function AdminProductsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    products, getProducts,
  } = useContext(AdminContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // const handleDelete = () => {
  //   if (selectedProduct) {
  //   deleteProduct(selectedProductid);
  //   closeModal();
  //   }
  //   }

  const openModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="flex justify-center items-center my-[20px]">
        <img src={logo} alt="Logo da Fashion Store - Escrito FASHION STORE em preto" />
      </header>
      <div className="max-w-[1200px] mx-auto box-border">
        <nav className="flex gap-3 my-[30px]">
          <Button
            type="button"
            variant="OUTLINE"
            className="text-xl leading-8 font-heading uppercase font-medium border-none px-0"
            title="inicio"
          />
          <Button
            type="button"
            variant="OUTLINE"
            className="text-xl leading-8 font-heading uppercase font-medium border-none px-0"
            title="produtos"
          />
        </nav>
        <div className="flex flex-wrap justify-between items-center mb-5">
          <div>
            <Heading title="produtos" />
            <Paragraph text="Gerencie os produtos do catálogo" className="my-[30px]" />
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
