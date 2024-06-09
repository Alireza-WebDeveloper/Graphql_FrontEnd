import React, { useState } from "react";
import { useGetCourse } from "../../hooks/course/use-http";
import ButtonContainer from "../../Components/Common/Main/button-container";

interface Course {
  name: string;
  description: string;
}

const Page: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, loading, error } = useGetCourse({
    page: String(page),
    limit: String(limit),
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data?.getCourse.data.course.map((item: Course, index: number) => (
          <div key={index} className="p-4 rounded bg-primary-800">
            <h1 className="text-lg font-bold text-secondary-100">
              {item.name}
            </h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {data?.getCourse && data.getCourse.data.course.length > 1 && (
        <div className="flex justify-center gap-5 mt-4 items-center">
          {page > 1 && (
            <ButtonContainer onClick={() => setPage(page - 1)}>
              previous
            </ButtonContainer>
          )}
          <div>{page}</div>
          {page * limit < data.getCourse.count && (
            <ButtonContainer onClick={() => setPage(page + 1)}>
              Next
            </ButtonContainer>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
