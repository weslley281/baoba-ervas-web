import { Menu } from '../../components/Menu';
import { CardProduct } from './components/CardProduct';
import { ContainerPrimcipal } from './styles';
import { useContextSelector } from 'use-context-selector';
import { ProductsContext } from '../../contexts/productContext';

export function Home() {
  const products = useContextSelector(ProductsContext, (context) => {
    return context.products;
  });

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
