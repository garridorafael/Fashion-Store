interface ParagraphProps {
  text: string;
}

export function Paragraph({ text }: ParagraphProps) {
  return <p className="text-xl leading-8">{text}</p>;
}
