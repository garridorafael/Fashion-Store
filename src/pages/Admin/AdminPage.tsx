import { useNavigate } from 'react-router-dom';
import { Heading } from '../../components/Heading';
import { Paragraph } from '../../components/Paragraph';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function AdminPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header unprotected />

      <div className="container px-4 max-w-[1200px] mx-auto box-border">
        <nav className="flex gap-3 my-[30px]">
          <button
            className="text-xl leading-8 font-heading uppercase font-medium"
            onClick={() => navigate('/admin')}
          >
            início
          </button>
          <button
            className="text-xl leading-8 font-heading uppercase font-medium"
            onClick={() => navigate('/admin/products')}
          >
            produtos
          </button>
        </nav>
        <div className="flex flex-col box-content">
          <Heading title="painel do administrador" />
          <Paragraph
            text="Seja bem vindo, administrador!"
            className="my-[30px]"
          />
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </>
  );
}
