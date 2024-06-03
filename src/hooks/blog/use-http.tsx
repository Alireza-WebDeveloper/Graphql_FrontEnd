import { useEffect, useState } from "react";
import { BlogState } from "./index.type";
import { graphqlClientBlog } from "./index.base";
import { gql } from "graphql-request";
import { FormState } from "../../Components/blog/create/index.type";
import { useNavigate } from "react-router-dom";

const useFetchBlogs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<BlogState[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await graphqlClientBlog.request<{
        getBlog: BlogState[];
      }>(gql`
        query BlogQuery {
          getBlog {
            _id
            title
            author
            content
          }
        }
      `);
      setData(response.getBlog);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, data };
};

const useCreateBlog = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<BlogState | null>(null);
  const navigate = useNavigate();

  const mutate = async ({ title, content, author }: FormState) => {
    setLoading(true);
    setError(null);

    try {
      const mutation = gql`
        mutation createBlog(
          $title: String!
          $content: String!
          $author: String!
        ) {
          createBlog(title: $title, content: $content, author: $author) {
            title
            content
            author
          }
        }
      `;

      const variables = { title, content, author }; // Define GraphQL variables

      const response = await graphqlClientBlog.request<{
        createBlog: BlogState;
      }>(mutation, variables);
      setData(response.createBlog);
      navigate("/blog");
    } catch (err: any) {
      setError(
        err.message || "An error occurred while creating the blog post."
      );
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error, data };
};
export { useFetchBlogs, useCreateBlog };
