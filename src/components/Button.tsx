interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type: 'button' | 'reset' | 'submit' | undefined;
  variant: 'SOLID' | 'OUTLINE';
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  className,
  variant,
  title,
  type,
  icon,
  ...props
}: ButtonProps) {
  const variants = {
    SOLID: 'text-white bg-black border-black border',
    OUTLINE: 'text-back bg-white border-black border',
  };

  const selectedVariant = variants[variant];
  return (
    <button
      type={type || 'submit'}
      className={`${className} ${selectedVariant} px-4 py-1 font-medium flex items-center`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </button>
  );
}
