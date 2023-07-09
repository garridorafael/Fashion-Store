import { useNavigate } from 'react-router-dom';
import { Heading } from '../../components/Heading';
import logo from '../../assets/FASHIONSTORE.svg';
import { Paragraph } from '../../components/Paragraph';
import { Footer } from '../../components/Footer';

export function AdminPage() {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex justify-center items-center my-[20px]">
        <img src={logo} alt="Logo da Fashion Store - Escrito FASHION STORE em preto" />
      </header>
      <div className="container px-4 max-w-[1200px] mx-auto box-border">
        <nav className="flex gap-3 my-[30px]">
          <button className="text-xl leading-8 font-heading uppercase font-medium" onClick={() => navigate('/admin')}>início</button>
          <button className="text-xl leading-8 font-heading uppercase font-medium" onClick={() => navigate('/adminProducts')}>produtos</button>
        </nav>
        <div className="flex flex-col box-content">
          <Heading title="painel do administrador" />
          <Paragraph text="Seja bem vindo, administrador!" className="my-[30px]" />
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </>
  );
}
