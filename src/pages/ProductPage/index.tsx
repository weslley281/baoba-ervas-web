import { useEffect, useState } from 'react';
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
  return (
    <Container>
      <Menu />
      <section>
        <aside>
          <div className="BasicProduc">
            <img src=""></img>
          </div>
        </aside>
        <aside>oi</aside>
      </section>
    </Container>
  );
}
