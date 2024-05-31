import { gql } from "graphql-request";
import { useEffect, useState } from "react";
import { graphqlClientHome } from "./index.Base";
import { CompanyState } from "./index.type";

const useFetchCompanyById = ({ id }: { id: string | null }) => {
  const [company, setCompany] = useState<CompanyState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getCompany = async () => {
    const query = gql`
      query GetCompanyById($id: String!) {
        companyById(id: $id) {
          id
          name
          description
        }
      }
    `;

    try {
      const response: any = await graphqlClientHome.request(query, {
        id,
      });
      setCompany(response.companyById);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCompany();
    }
  }, [id]);

  return { company, loading, error };
};
export { useFetchCompanyById };
