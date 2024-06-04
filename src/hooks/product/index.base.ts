import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache({}),
});

export { apolloClient };
