import { Routes, Route } from 'react-router-dom';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { ProductPage } from '../pages/ProductPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
