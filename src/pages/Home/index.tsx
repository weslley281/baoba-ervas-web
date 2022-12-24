import { Menu } from '../../components/Menu';
import { CardProduct } from './components/CardProduct';
import { ContainerPrimcipal } from './styles';
import { useContextSelector } from 'use-context-selector';
import { ProductsContext } from '../../contexts/productContext';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';

interface ProductInfo {
  product_id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  createdAt: string;
}

export function Home() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    api
      .get('/products/product_list')
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <ContainerPrimcipal>
      <Menu />
      <section>
        <div className="content">
          {products.map((product) => {
            return (
              <CardProduct
                key={product.product_id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            );
          })}
        </div>
      </section>
    </ContainerPrimcipal>
  );
}
