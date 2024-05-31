import { gql } from "graphql-request";
import { useEffect, useState } from "react";
import { graphqlClientHome } from "./index.Base";
import { JobResponse, JobState } from "./index.type";

const useFetchJob = () => {
  const [jobs, setJobs] = useState<JobState[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getJobs = async () => {
    const query = gql`
      query {
        job {
          id
          title
          description
          company {
            id
            name
          }
        }
      }
    `;

    try {
      const response: JobResponse = await graphqlClientHome.request(query);

      setJobs(response.job);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return { jobs, loading, error };
};

export default useFetchJob;
