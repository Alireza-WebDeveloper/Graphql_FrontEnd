import List from "../../Components/Home/job/List";
import { useFetchGetJobs } from "../../hooks/job/use-http";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const { jobs, loading, error } = useFetchGetJobs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error ...</div>;

  return <List data={jobs} />;
};

export default Page;
