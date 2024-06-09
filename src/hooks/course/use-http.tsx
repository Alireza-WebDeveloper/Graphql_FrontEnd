import { gql, useQuery } from "@apollo/client";
import { GetCourseParameter, CourseState } from "./index.type";

// Define the query for reusability
const getCourseQuery = gql`
  query getCourse($page: String, $limit: String) {
    getCourse(page: $page, limit: $limit) {
      name
      description
    }
  }
`;

const useGetCourse = ({ page, limit }: GetCourseParameter) => {
  const { data, loading, error } = useQuery<{
    getCourse: CourseState[];
  }>(getCourseQuery, {
    variables: { page, limit },
  });

  return { data, loading, error };
};

export { useGetCourse };
