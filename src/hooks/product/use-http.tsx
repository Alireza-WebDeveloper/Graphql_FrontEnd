import { useEffect, useState } from "react";
import { ProductState } from "./index.type";
import { graphqlClientProduct } from "./index.base";
import { gql } from "graphql-request";

const useFetchProducts = (): {
  loading: boolean;
  error: string | null;
  products: ProductState[];
} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductState[]>([]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { product } = await graphqlClientProduct.request<any>(gql`
        query ProductQuery {
          product {
            id
            name
            price
          }
        }
      `);

      setProducts(product);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { loading, error, products };
};

export default useFetchProducts;
