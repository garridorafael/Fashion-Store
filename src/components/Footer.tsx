interface FooterProps {
  className?: string;
}
export function Footer({ className }:FooterProps) {
  return (
    <footer className={`${className} w-screen bg-black py-[70px] bottom-0 mb-0 mt-6`}>
      <div className="flex justify-center items-center h-full box-content w-screen">
        <h3 className="text-white text-center text-[19px] font-bold mobile:text-base">
          Todos os direitos reservados - Kenzie Academy Brasil
        </h3>
      </div>
    </footer>
  );
}
