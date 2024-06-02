import { GraphQLClient } from "graphql-request";
const graphqlClientProduct = new GraphQLClient("http://localhost:8000/graphql");

export { graphqlClientProduct };
