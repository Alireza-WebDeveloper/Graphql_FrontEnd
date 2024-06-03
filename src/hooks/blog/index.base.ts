import { GraphQLClient } from "graphql-request";
const graphqlClientBlog = new GraphQLClient("http://localhost:8000/graphql");

export { graphqlClientBlog };
