import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { HomeCard } from './HomeCard';
import { useCart } from '../hooks';
import { numberToBrl } from '../helpers/numberToBrl';
import { ImgComponent } from './ImgComponent';
import { IProduct } from './Cart/CartModal';

export function ProductDetails() {
  const { id } = useParams();
  const { setCartProducts } = useCart();
  const [product, setProduct] = useState<IProduct>();
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fashion-store-api.onrender.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erro ao buscar os detalhes do produto:', error);
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch('https://fashion-store-api.onrender.com/products');
        const data = await response.json();
        // eslint-disable-next-line max-len
        setRelatedProducts(data.filter((relatedProduct: { id: number }) => relatedProduct.id !== parseInt(id, 10)));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erro ao buscar os produtos relacionados:', error);
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id]);

  const handleAddToCart = (productToAdd: IProduct) => {
    setCartProducts((prevProducts) => [...prevProducts, productToAdd]);
  };

  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="flex items-center justify-center mb-10 mt-10">
          <Link
            to="/"
            className="text-black flex items-center justify-center font-medium uppercase text-lg font-['Oswald'] w-64 h-7"
          >
            <span className="mr-2">HOME &gt;</span>
            {product.name}
          </Link>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info flex flex-col justify-center text-left w-96 h-64 gap-4">
            <h2 className="text-base font-bold font-['Roboto'] w-52 h-7">
              {product.name}
            </h2>
            <p className="text-2xl font-normal font-['Oswald'] w-32 h-12">
              {product.price ? numberToBrl(product.price) : ''}
            </p>
            <p className="text-small font-normal font-['Roboto'] w-96 h-32">
              {product.description}
            </p>
            <div className="flex items-center bg-black w-60 h-16 mt-4">
              <div>
                <ImgComponent
                  src="https://raw.githubusercontent.com/grupo6-tsunode/fashion-store/be0b7a76d4bab50749ec9add0445b36ae60d0466/src/assets/Group4.svg"
                  alt="Imagem do carrinho de compras"
                  className="m-0 p-0 w-9 h-9"
                />
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="text-white text-sm font-medium font-['Roboto'] uppercase"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
        <div className="related-products mt-20">
          <h3 className="text-6xl mb-10 font-medium uppercase font-['Oswald'] ml-10 w-96 h-16">
            Veja também
          </h3>
          <div className="w-100">
            <ul className="flex overflow-x-auto gap-7 ml-10">
              {relatedProducts.map((relatedProduct) => (
                <HomeCard product={relatedProduct} key={relatedProduct.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
