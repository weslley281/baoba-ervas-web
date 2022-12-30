import { CardFooter, Container, ImageProduct, Link } from './styles';
import { Package, ShoppingCart, Timer } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { formatToBRCashString } from '../../../../utils/formatCashString';
import { useCart } from '../../../../hooks/useCart';
import { toast } from 'react-toastify';
import { InputCount } from '../Inputs/InputCount';

interface CardProps {
  product_id: number;
  name: string;
  image: string;
  price: number;
}

export function CardProduct({ product_id, name, image, price }: CardProps) {
  const [count, setCount] = useState(1);
  const url = `/product/${product_id}`;
  const productRef = useRef<HTMLLIElement>(null);
  const [priceFormatted, setPriceFormatted] = useState<number | string>(price);

  useEffect(() => {
    if (productRef.current) {
      ScrollReveal().reveal(productRef.current, {
        origin: 'bottom',
      });
    }
  }, []);

  // Calcula o novo valor conforme a quantidade do produto altera //
  useEffect(() => {
    const newPrice = formatToBRCashString(price * count);
    setPriceFormatted(newPrice);
  }, [price, count]);

  const { addProductToShopCart } = useCart();

  // Função responsável por adicionar +1 unidade do produto //
  function handleAddOneProductUnity() {
    const newCount = count + 1;

    if (newCount >= 100) {
      toast.warn('Quantidade máxima: 99');
      return;
    }

    setCount(newCount);
  }

  // Função responsável por remover 1 unidade do produto //
  function handleRemoveOneProductUnity() {
    const newCount = count - 1;

    if (newCount <= 0) {
      toast.warn('Quantidade mínima: 1');
      return;
    }
    setCount(newCount);
  }

  function hanldeAddToShoppingCart() {
    const productItem = {
      product_id,
      name,
      image,
      price,
    };

    addProductToShopCart({ ...productItem }, count);
    setCount(1);
  }

  // Função responsável por atualizar o valor do input //
  function handleChangeProductUnity(countOfProduct: number) {
    const newCount = countOfProduct;

    if (newCount <= 0 || newCount >= 100) {
      return;
    }

    setCount(newCount);
  }

  return (
    <Container>
      <Link href={url}>
        <ImageProduct src={image} />
      </Link>
      <CardFooter>
        <div className="actions">
          <Link href={url}>
            <p className="name">{name}</p>
          </Link>
          <Link href={url}>
            <p className="price">
              R$ {count === 0 ? formatToBRCashString(price) : priceFormatted}
            </p>
          </Link>
        </div>

        <div className="actions">
          <InputCount
            value={count}
            onChange={(e) => handleChangeProductUnity(Number(e.target.value))}
            onAddOneProductUnity={handleAddOneProductUnity}
            onRemoveProductUnity={handleRemoveOneProductUnity}
            min={1}
            max={5}
          />

          <button className="buy-button" onClick={hanldeAddToShoppingCart}>
            <ShoppingCart size={15} weight="fill" />
          </button>
        </div>
      </CardFooter>
    </Container>
  );
}
