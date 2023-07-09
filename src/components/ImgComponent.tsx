interface ImgComponentProps {
  src: string;
  className?: string;
  alt: string;
}

export function ImgComponent({ src, className = 'w-945 h-691 mx-6 sm:w-59-0625 sm:h-143-1875 sm:gap-0 sm:mx-0', alt }: ImgComponentProps) {
  return (
    <div>
      <img src={src} className={className} alt={alt} />
    </div>
  );
}
