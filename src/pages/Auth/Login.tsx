import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from '../../components/Header';
import imageLogin from '../../assets/login_highlight.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { useAdmin } from '../../hooks/useAdmin';

const schema = z.object({
  email: z.string().email('Insira um e-mail válido.'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres.'),
});

export default function Login() {
  const { login } = useAdmin();

  type LoginSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    await login(data);
  };

  return (
    <>
      <div className="h-screen max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex w-full gap-10 items-center ">
          <div className="w-1/2">
            <img
              src={imageLogin}
              alt="Imagem de uma mulher usando um blazer branco"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/2 flex flex-col gap-4 max-w-lg"
          >
            <Heading title="ENTRAR" />
            <Input
              register={register('email')}
              errorMessage={errors.email?.message}
              className="py-3 px-4"
              placeholder="E-MAIL"
            />
            <Input
              register={register('password')}
              type="password"
              errorMessage={errors.password?.message}
              className="py-3 px-4"
              placeholder="SENHA"
            />
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
