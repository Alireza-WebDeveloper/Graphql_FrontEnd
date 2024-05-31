import { gql } from "graphql-request";
import { useEffect, useState } from "react";
import { graphqlClientHome } from "./index.Base";
import { JobResponse, JobState } from "./index.type";

const useFetchGetJobs = () => {
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

const useFetchGetJobById = ({ id }: { id: string | null }) => {
  const [job, setJob] = useState<JobState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getJob = async () => {
    const query = gql`
      query GetJobById($id: String!) {
        jobById(id: $id) {
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
      const response: JobResponse = await graphqlClientHome.request(query, {
        id,
      });
      setJob(response.jobById);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getJob();
    }
  }, [id]);

  return { job, loading, error };
};

export { useFetchGetJobs, useFetchGetJobById };
