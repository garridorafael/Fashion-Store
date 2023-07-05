import { Heading } from '../../components/Heading';
import logo from '../../assets/FASHIONSTORE.svg';
import { Paragraph } from '../../components/Paragraph';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import addIcon from '../../assets/add_circle_FILL0_wght400_GRAD0_opsz48 1.svg';
// import { ProductCardAdmin } from '../../components/CardProductAdmin';

export function AdminPage() {
  return (
    <>
      <header className="flex justify-center items-center my-[20px]">
        <img src={logo} alt="Logo da Fashion Store - Escrito FASHION STORE em preto" />
      </header>
      <div className="h-screen max-w-screen-2xl mx-auto">
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
        <div className="flex justify-between items-center">
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
            />
          </div>
        </div>
        <main>
          <ul>
            {/* <ProductCardAdmin /> */}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
}
