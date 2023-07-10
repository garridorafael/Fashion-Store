import React, { useContext, useEffect, useState } from 'react';
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
import { AdminContext } from '../../context/AdminContext'; // import the AdminContext

export function ProductDetails() {
  const { id } = useParams<{ id?: string }>();
  const { setCartProducts } = useCart();
  const { isOpen } = useCart();
  const { products, getProducts } = useContext(AdminContext); // use the AdminContext
  const [product, setProduct] = useState<IProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const [fetchError, setFetchError] = useState<string>('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        await getProducts();

        if (id) {
          const foundProduct = products.find(
            (prod) => prod.id === parseInt(id, 10),
          ); // get the product from the AdminContext
          if (foundProduct) {
            setProduct(foundProduct);
          }
        }
      } catch (error) {
        setFetchError('Erro ao buscar os detalhes do produto');
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        if (id) {
          setRelatedProducts(
            products.filter(
              // eslint-disable-next-line max-len
              (relatedProduct: IProduct) => relatedProduct.id !== (id ? parseInt(id, 10) : undefined),
            ),
          );
        }
      } catch (error) {
        setFetchError('Erro ao buscar os produtos relacionados');
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id, products, getProducts]); // add getProducts to the dependencies list

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
        <div className="flex flex-col lg:flex-row items-center justify-center mt-4 gap-10 mx-4">
          <div className="lg:h-[500px] lg:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center text-center lg:text-left  gap-4">
            <h2 className="text-base font-bold font-['Roboto'] ">
              {product.name}
            </h2>
            <p className="text-2xl font-normal  lg:text-left text-center font-['Oswald']">
              {numberToBrl(+product.price)}
            </p>
            <p className="text-small font-normal font-['Roboto'] w-96 h-32">
              {product.description}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="flex items-center bg-black w-52 py-2 mx-auto lg:mx-0 mt-4"
            >
              <div>
                <ImgComponent
                  src="https://raw.githubusercontent.com/grupo6-tsunode/fashion-store/be0b7a76d4bab50749ec9add0445b36ae60d0466/src/assets/Group4.svg"
                  alt="Imagem do carrinho de compras"
                  className="m-0 p-0 w-9 h-9"
                />
              </div>
              <p className="text-white text-sm font-medium font-['Roboto'] uppercase">
                Adicionar ao carrinho
              </p>
            </button>
          </div>
        </div>
        <div className="related-products">
          <Heading title="Veja também" classname="text-2xl my-10" />
          <div className="mx-2">
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
