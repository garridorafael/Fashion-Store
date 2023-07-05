import { Heading } from '../../components/Heading';
import logo from '../../assets/FASHIONSTORE.svg';
import { Paragraph } from '../../components/Paragraph';
import { Footer } from '../../components/Footer';

export function AdminPage() {
  return (
    <>
      <header className="flex justify-center items-center my-[20px]">
        <img src={logo} alt="Logo da Fashion Store - Escrito FASHION STORE em preto" />
      </header>
      <div className="h-screen max-w-screen-2xl mx-auto">
        <nav className="flex gap-3 my-[30px]">
          <button className="text-xl leading-8 font-heading uppercase font-medium">início</button>
          <button className="text-xl leading-8 font-heading uppercase font-medium">produtos</button>
        </nav>
        <Heading title="painel do administrador" />
        <Paragraph text="Seja bem vindo, administrador!" className="my-[30px]" />
        <Footer />
      </div>
    </>
  );
}
