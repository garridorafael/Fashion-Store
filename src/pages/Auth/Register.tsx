import { Header } from '../../components/Header';
import imageRegister from '../../assets/register_highlight.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Paragraph } from '../../components/Paragraph';

export default function Register() {
  return (
    <>
      <div className="h-screen max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex w-full gap-10 items-center mt-10 ">
          <div className="w-1/2">
            <img
              src={imageRegister}
              alt="Imagem de uma mulher usando um blazer branco"
            />
          </div>
          <form className="w-1/2 flex flex-col gap-4 max-w-lg">
            <Heading title="CADASTRAR-SE" />
            <Paragraph text="Seja bem vindo, administrador" />
            <Input className="py-3 px-4" placeholder="NOME" />
            <Input className="py-3 px-4" placeholder="E-MAIL" />
            <Input className="py-3 px-4" placeholder="SENHA" />
            <Input className="py-3 px-4" placeholder="CONFIRMAR SENHA" />

            <div className="flex justify-end">
              <Button
                className="py-2"
                type="button"
                title="CADASTRAR-SE"
                variant="SOLID"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
