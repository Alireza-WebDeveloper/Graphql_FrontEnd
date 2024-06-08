import { useState } from "react";
import { useFetchNews } from "../../hooks/news";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ButtonContainer from "../../Components/Common/Main/button-container";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
    watchQuery: {
      fetchPolicy: "network-only",
    },
  },
});

const CountryList = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const { loading, error, data, refetch } = useFetchNews();

  const handleRefetch = async () => {
    setIsRefetching(true);
    await refetch();
    setIsRefetching(false);
  };

  if (loading || isRefetching)
    return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8">Error :</p>;

  return (
    <div className="flex flex-col space-y-4 p-2">
      <ButtonContainer color="blue" fontSize="large" onClick={handleRefetch}>
        refetch
      </ButtonContainer>
      <h2 className="text-2xl font-bold mb-4 text-center">List of Countries</h2>
      <ul className="grid  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
        {data &&
          data.countries.map((country) => (
            <li
              key={country.code}
              className="mb-2 border-2 rounded   p-3 flex items-center justify-center gap-1"
            >
              <span className="font-bold">{country.name}</span> -{" "}
              <span>{country.emoji}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <ApolloProvider client={client}>
      <div className=" min-h-screen py-8">
        <CountryList />
      </div>
    </ApolloProvider>
  );
};

export default Page;
