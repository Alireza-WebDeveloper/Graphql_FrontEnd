import React from "react";
import { useFetchBlogs } from "../../hooks/blog/use-http";
import List from "../../Components/blog/list";
import CustomLink from "../../Components/Common/Main/CustomLink";
import ButtonContainer from "../../Components/Common/Main/button-container";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const { data, error, loading } = useFetchBlogs();
  if (error) return <>something error</>;
  if (loading) return <>loading...</>;

  console.log(data);
  return (
    <div className="relative">
      <List data={data} />
      {/* Create Blog */}
      <CustomLink to="/blog/create">
        <ButtonContainer fontSize="large" color="red">
          create
        </ButtonContainer>
      </CustomLink>
    </div>
  );
};

export default Page;
