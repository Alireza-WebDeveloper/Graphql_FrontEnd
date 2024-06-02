import useFetchProducts from "../../hooks/product/use-http";
import List from "../../Components/product/list";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const { products, loading, error } = useFetchProducts();

  // Handle loading and error states gracefully
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>; // Provide specific error message

  return <div>{products && <List data={products} />}</div>;
};

export default Page;
