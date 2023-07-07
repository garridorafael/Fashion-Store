import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Header } from '../../components/Header';
import imageRegister from '../../assets/register_highlight.png';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Paragraph } from '../../components/Paragraph';
import { useAdmin } from '../../hooks';

const schema = z.object({
  name: z.string().nonempty('O campo Nome é obrigatório.'),
  email: z.string().email('Insira um e-mail válido.'),
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres.')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número.')
    .regex(
      /[^a-zA-Z0-9]/,
      'A senha deve conter pelo menos um caractere especial.',
    ),
  confirmPassword: z.string().nonempty('Confirmação de senha é obrigatório.'),
});

export default function Register() {
  const { register: registerUser } = useAdmin();
  const navigate = useNavigate();

  type RegisterSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({ name, email, password }: RegisterSchemaType) => {
    await registerUser({ name, email, password });
    navigate('/login');
  };

  return (
    <>
      <div className="h-screen max-w-screen-2xl mx-auto">
        <Header unprotected />
        <div className="flex w-full gap-10 items-center mt-10 ">
          <div className="w-1/2">
            <img
              src={imageRegister}
              alt="Imagem de uma mulher usando um blazer branco"
            />
          </div>
          <form
            onSubmit={() => {
              handleSubmit(onSubmit);
            }}
            className="w-1/2 flex flex-col gap-4 max-w-lg"
          >
            <Heading title="CADASTRAR-SE" />
            <Paragraph text="Seja bem vindo, administrador" />
            <Input
              register={register('name')}
              errorMessage={errors.name?.message}
              className="py-3 px-4"
              placeholder="NOME"
            />
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
            <Input
              register={register('confirmPassword')}
              type="password"
              errorMessage={errors.confirmPassword?.message}
              className="py-3 px-4"
              placeholder="CONFIRMAR SENHA"
            />
            <div className="flex justify-end">
              <Button
                className="py-2"
                type="submit"
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
