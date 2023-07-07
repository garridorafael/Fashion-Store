import imageLogin from '../assets/login_highlight.png';

export function MainImg() {
  return (
    <div>
      <img
        src={imageLogin}
        className="w-21-375 h-18-875 mx-6 sm:w-59-0625 sm:h-143-1875 sm:gap-0 sm:mx-0"
        alt="Imagem de uma mulher usando um blazer branco"
      />
    </div>
  );
}
