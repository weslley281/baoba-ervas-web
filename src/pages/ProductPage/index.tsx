import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { api } from '../../lib/axios';
import { Container } from './styles';

interface ProductInfo {
  product_id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  createdAt: string;
}

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductInfo>();

  useEffect(() => {
    api
      .get(`/products/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.log('ops! ocorreu um erro' + err);
      });

    console.log(`/products/product/${id}`);
  }, []);

  return (
    <Container>
      <Menu />
      <section>
        <aside>
          <div className="image">
            <img src={product?.image}></img>
          </div>
        </aside>
        <aside>
          <div className="details">
            <h1>{product?.name}</h1>
            <span className="price">
              R$ {product?.price.toString().replace('.', ',')}
            </span>
            <span className="descripition">{product?.description}</span>
          </div>
        </aside>
      </section>
      <div className="more">aaa</div>
    </Container>
  );
}
