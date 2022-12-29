import { CardFooter, Container, ImageProduct, Link } from './styles';

interface CardProps {
  product_id: number;
  name: string;
  image: string;
  price: number;
}

export function CardProduct({ product_id, name, image, price }: CardProps) {
  const url = `/product/${product_id}`;
  return (
    <Link href={url}>
      <Container>
        <ImageProduct src={image} />
        <CardFooter>
          <p className="name">{name}</p>
          <p className="price">R$ {price}</p>
        </CardFooter>
      </Container>
    </Link>
  );
}
