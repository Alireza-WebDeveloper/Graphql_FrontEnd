import { useState } from "react";

import { FormState } from "../../../Components/blog/create/index.type";
import Form from "../../../Components/blog/create/form";
import { useCreateJob } from "../../../hooks/job/use-http";
import { useCreateBlog } from "../../../hooks/blog/use-http";

const Page = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleUpdateForm = (key: keyof FormState, value: string): void => {
    setForm({ ...form, [key]: value });
  };

  const { mutate, loading, error, data } = useCreateBlog();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    mutate(form);
  };

  return (
    <div className="text-center">
      <Form
        handleSubmit={handleSubmit}
        handleUpdateForm={handleUpdateForm}
        form={form}
      />
    </div>
  );
};

export default Page;
