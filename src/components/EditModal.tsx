/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import addIcon from '../assets/add_circle_FILL0_wght400_GRAD0_opsz48 1.svg';
import { AdminContext } from '../context/AdminContext';
import { IProduct } from './Cart/CartModal';
import { Button } from './Button';
import { Input } from './Input';
import { TextArea } from './TextArea';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IproductEditModal {
  name: string;
  price: number;
  image: number;
  description: string;
  id:number;
}

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
  description: z.string(),
});

type TechSchemaType = z.infer<typeof productSchema>;

export function EditProduct({ isOpen, onClose }: IModalProps) {
  const { editProduct } = useContext(AdminContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TechSchemaType>({ resolver: zodResolver(productSchema) });

  if (!isOpen) return null;

  async function onSubmit(data: IProduct) {
    if (data.id) {
      await editProduct(data.id, data);
      onClose();
    }
  }

  function onContainerClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  return (
    <div tabIndex={-1} onKeyDown={handleKeyDown}>
      <div
        className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        onClick={onContainerClick}
      >
        <div className="bg-white rounded-lg max-w-sm w-full">
          <div>
            <header className="bg-white text-black p-4 flex items-center justify-between">
              <h2 className="font-medium font-heading text-[28px] uppercase">Editar Produto</h2>
              <button onClick={onClose} className="text-black">
                <FaTimes size={24} />
              </button>
            </header>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white px-4 py-4 flex flex-col gap-2"
          >
            <Input className="py-2 pl-2" placeholder="NOME" register={register('name')} errorMessage={errors.name?.message} />
            <Input
              className="py-2 pl-2"
              placeholder="PREÇO (R$)"
              type="text"
              inputMode="numeric"
              register={register('price', { valueAsNumber: true })}
              errorMessage={errors.price?.message}
            />
            <Input
              className="py-2 pl-2"
              placeholder="IMAGEM (URL)"
              register={register('image')}
              errorMessage={errors.image?.message}
            />
            <TextArea className="pl-2 pt-2" placeholder="DESCRIÇÃO RESUMIDA" name="description" register={register('description')} />
            <Button
              className="mt-3 w-[210px] self-end mb-6"
              icon={<img src={addIcon} alt="Ícone de adicionar" />}
              title="EDITAR PRODUTO"
              variant="SOLID"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
