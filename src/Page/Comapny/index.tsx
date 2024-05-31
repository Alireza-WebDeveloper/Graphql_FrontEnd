import { useParams } from "react-router-dom";
import { useFetchCompanyById } from "../../hooks/company/use-http";
import Detail from "../../Components/Company/Detail";

const Page = () => {
  const { id }: any = useParams();
  const { company } = useFetchCompanyById({ id });

  return <div>{company && <Detail company={company} />}</div>;
};

export default Page;
