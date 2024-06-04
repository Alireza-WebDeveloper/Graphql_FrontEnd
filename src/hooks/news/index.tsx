import { useQuery, gql, FragmentMatcher } from "@apollo/client";

interface Country {
  code: string;
  name: string;
  emoji: string;
}

// Define the fragment for reusability
const countryDetails = gql`
  fragment countryDetails on Country {
    code
    name
    emoji
  }
`;

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      ...countryDetails
    }
  }
  ${countryDetails}
`;

const useFetchNews = () => {
  const { loading, error, data, refetch } = useQuery<{
    countries: Country[];
  }>(GET_COUNTRIES, { pollInterval: 10000, fetchPolicy: "cache-and-network" });

  return { loading, error, data, refetch };
};

export { useFetchNews };
