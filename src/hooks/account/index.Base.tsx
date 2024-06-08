import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-only",
      pollInterval: 10000,
    },
  },
});

interface ApolloServerProviderProps {
  children: React.ReactNode;
}

const ApolloServerProvider: React.FC<ApolloServerProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloServerProvider;
