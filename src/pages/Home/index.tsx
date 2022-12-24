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

  async function fetchProducts() {
    const { data } = await api.get(`products/product_list`);

    const products = data.items.map((product: ProductInfo) => {
      return {
        id: product.product_id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
        createdAt: product.createdAt,
      };
    });

    setProducts(products);
    setIsLoadingProduct(false);
  }

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      setIsLoadingProduct(true);
      const timeout = setTimeout(async () => {
        await fetchProducts();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [search]);

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
                image="https://www.rmouracereais.com.br/admin/uploads/alpiste-canadense.jpg"
                price={product.price}
              />
            );
          })}
        </div>
      </section>
    </ContainerPrimcipal>
  );
}
