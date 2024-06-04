import { useQuery, gql } from "@apollo/client";

interface Country {
  code: string;
  name: string;
  emoji: string;
}

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

const useFetchNews = () => {
  const { loading, error, data, refetch } = useQuery<{
    countries: Country[];
  }>(GET_COUNTRIES, { pollInterval: 10000 });

  return { loading, error, data, refetch };
};

export { useFetchNews };
