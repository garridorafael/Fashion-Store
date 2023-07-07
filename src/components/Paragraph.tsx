interface ParagraphProps {
  text: string;
  className?: string;
}

export function Paragraph({ text, className }: ParagraphProps) {
  return <p className={`text-xl leading-8 ${className}`}>{text}</p>;
}
