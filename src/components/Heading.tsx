interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return <h2 className="text-6xl font-medium font-heading uppercase">{title}</h2>;
}
