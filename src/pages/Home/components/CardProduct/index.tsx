import { CardFooter, Container, ImageProduct, Link } from './styles';

interface CardProps {
  name: string;
  image: string;
  price: number;
  datas: Object;
}

export function CardProduct({ name, image, price }: CardProps) {
  const linkPage = `/products`;
  return (
    <Link href={linkPage}>
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
