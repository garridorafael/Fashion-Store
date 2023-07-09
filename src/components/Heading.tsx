interface HeadingProps {
  title: string;
  classname?: string;
}

export function Heading({ title, classname }: HeadingProps) {
  return (
    <h2
      className={`${classname} text-6xl mobile:text-4xl w-full font-medium font-heading uppercase`}
    >
      {title}
    </h2>
  );
}
