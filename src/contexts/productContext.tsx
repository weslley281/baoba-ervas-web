import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../lib/axios';

interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  createdAt: string;
}

interface CreateProductsInput {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface ProductsContextType {
  products: Product[];
  fetchproducts: (query?: string) => Promise<void>;
  createProduct: (data: CreateProductsInput) => Promise<void>;
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchproducts = useCallback(async (query?: string) => {
    const response = await api.get('products', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setProducts((state) => [response.data, ...state]);
  }, []);

  const createProduct = useCallback(async (data: CreateProductsInput) => {
    const { name, image, description, price, category } = data;

    const response = await api.post('products/product_list', {
      name,
      image,
      description,
      price,
      category,
    });

    setProducts((state) => [response.data, ...state]);
  }, []);

  useEffect(() => {
    fetchproducts();
  }, [fetchproducts]);

  return (
    <ProductsContext.Provider
      value={{ products, fetchproducts, createProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
