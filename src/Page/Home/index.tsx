import useFetchJob from "../../hooks/job/use-http";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const { jobs, loading, error } = useFetchJob();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error ...</div>;

  return (
    <div className="p-2 bg-secondary-100 rounded-lg">
      <h1 className="text-lg font-bold">Learn JavaScript</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <span className="text-gray-900">{job.title}</span> at
            <span className="text-gray-700">
              {job.company.name}: {job.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
