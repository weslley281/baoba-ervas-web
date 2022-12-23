import { CardFooter, Container, ImageProduct } from './styles';

interface CardProps {
  name: string;
  image: string;
  price: number;
}
export function CardProduct({ name, image, price }: CardProps) {
  return (
    <Container>
      <ImageProduct src={image} />
      <CardFooter>
        <p className="name">{name}</p>
        <p className="price">R$ {price}</p>
      </CardFooter>
    </Container>
  );
}
