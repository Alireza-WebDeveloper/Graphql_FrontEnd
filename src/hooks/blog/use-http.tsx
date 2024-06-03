import { useEffect, useState } from "react";
import { BlogState } from "./index.type";
import { graphqlClientBlog } from "./index.base";
import { gql } from "graphql-request";

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

export default useFetchBlogs;
