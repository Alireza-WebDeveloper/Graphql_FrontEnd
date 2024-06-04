// !! Packages
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

// !! Create Apollo Client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

// !! Define GraphQL Query
const query = gql`
  query getCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

const CountryList = () => {
  // !! Use useQuery to execute the query
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <CountryList />
      </div>
    </ApolloProvider>
  );
};

export default Page;
