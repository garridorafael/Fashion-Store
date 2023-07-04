import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
  errorMessage?: string | undefined;
  className?: string;
}

export function Input({
  errorMessage,
  register,
  className,
  ...props
}: InputFieldProps) {
  return (
    <fieldset className="flex flex-col w-full gap-2 relative">
      <input
        {...props}
        {...register}
        className={`${className} placeholder:text-gray-400 bg-gray-100 outline-none`}
      />

      {errorMessage ? (
        <small className="text-sm text-center font-medium text-red-500">
          {errorMessage}
        </small>
      ) : null}
    </fieldset>
  );
}
