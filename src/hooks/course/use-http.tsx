import { gql, useQuery } from "@apollo/client";
import { GetCourseParameter, GetCourseResponse } from "./index.type";

// Define the query for reusability
const getCourseQuery = gql`
  query getCourse($page: String, $limit: String) {
    getCourse(page: $page, limit: $limit) {
      status
      message
      count
      data {
        course {
          description
          name
        }
      }
    }
  }
`;

const useGetCourse = ({ page, limit }: GetCourseParameter) => {
  const { data, loading, error } = useQuery<{
    getCourse: GetCourseResponse;
  }>(getCourseQuery, {
    variables: { page, limit },
  });

  return { data, loading, error };
};

export { useGetCourse };
