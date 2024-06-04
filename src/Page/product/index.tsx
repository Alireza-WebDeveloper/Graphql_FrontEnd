import useFetchProducts from "../../hooks/product/use-http";
import List from "../../Components/product/list";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const { product, error, loading } = useFetchProducts();
  if (loading) return <>...loading</>;
  return <div> {product && <List data={product} />}</div>;
};

export default Page;
