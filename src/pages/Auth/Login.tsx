import { Header } from '../../components/Header';
import imageLogin from '../../assets/login_highlight.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

export default function Login() {
  return (
    <>
      <div className="h-screen max-w-screen-2xl mx-auto">
        <Header unprotected />
        <div className="flex w-full gap-10 items-center ">
          <div className="w-1/2">
            <img
              src={imageLogin}
              alt="Imagem de uma mulher usando um blazer branco"
            />
          </div>
          <form className="w-1/2 flex flex-col gap-4 max-w-lg">
            <Heading title="ENTRAR" />

            <Input className="py-3 px-4" placeholder="E-MAIL" />
            <Input className="py-3 px-4" placeholder="SENHA" />

            <div className="flex gap-4">
              <Button
                className="py-2"
                type="submit"
                title="ACESSAR"
                variant="SOLID"
              />
              <Button
                className="py-2"
                type="button"
                title="CADASTRE-SE"
                variant="OUTLINE"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
