import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { HomeCard } from '../../components/HomeCard';
import { useCart } from '../../hooks';
import { numberToBrl } from '../../helpers/numberToBrl';
import { ImgComponent } from '../../components/ImgComponent';
import { CartModal, IProduct } from '../../components/Cart/CartModal';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';

export function ProductDetails() {
  const { id } = useParams<{ id?: string }>();
  const { setCartProducts } = useCart();
  const { isOpen } = useCart();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const [fetchError, setFetchError] = useState<string>('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://fashion-store-api.onrender.com/products/${id}`,
          );
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        setFetchError('Erro ao buscar os detalhes do produto');
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          'https://fashion-store-api.onrender.com/products',
        );
        const data = await response.json();
        if (id) {
          setRelatedProducts(
            data.filter(
              (relatedProduct: { id: number }) => relatedProduct.id !== parseInt(id, 10),
            ),
          );
        }
      } catch (error) {
        setFetchError('Erro ao buscar os produtos relacionados');
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id]);

  const handleAddToCart = (productToAdd: IProduct) => {
    setCartProducts((prevProducts) => [...prevProducts, productToAdd]);
  };

  if (fetchError) {
    return (
      <>
        <Header />
        <div className="container">
          <p>{fetchError}</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="container">
          <p>Carregando...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        {isOpen ? <CartModal /> : null}

        <Header />
        <div className="flex items-center justify-center  mt-10">
          <Link
            to="/"
            className="text-black flex items-center justify-center font-medium uppercase text-lg font-['Oswald'] w-64 h-7"
          >
            <span className="mr-2">HOME &gt;</span>
            {product.name}
          </Link>
        </div>
        <div className="flex items-center justify-center mt-4 gap-10 mx-4">
          <div className="h-[500px]">
            <img src={product.image} alt={product.name} className="h-full" />
          </div>
          <div className="flex flex-col justify-center text-left w-96 h-64 gap-4">
            <h2 className="text-base font-bold font-['Roboto'] w-52 h-7">
              {product.name}
            </h2>
            <p className="text-2xl font-normal font-['Oswald'] w-36 h-12">
              {numberToBrl(+product.price)}
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
        <div className="related-products">
          <Heading title="Veja também" classname="text-3xl my-10" />
          <div className="w-100">
            <ul className="flex overflow-x-auto gap-7">
              {relatedProducts.map((relatedProduct) => (
                <HomeCard product={relatedProduct} key={relatedProduct.id} />
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
