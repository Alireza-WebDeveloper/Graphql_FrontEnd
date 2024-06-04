import { useEffect, useState } from "react";
import { ProductState } from "./index.type";
import { apolloClient } from "./index.base";
import { gql } from "@apollo/client";

const useFetchProducts = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const query = gql`
    query ProductQuery {
      product {
        id
        name
        price
      }
    }
  `;
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await apolloClient.query<any>({
        query,
        variables: {
          id: "1",
        },
      });
      setProduct(data.product);
      setError("");
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { product, error, loading };
};

export default useFetchProducts;
