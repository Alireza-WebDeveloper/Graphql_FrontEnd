import { useState } from "react";

import { FormState } from "../../Components/create-job/index.type";
import Form from "../../Components/create-job/form";
import { useCreateJob } from "../../hooks/job/use-http";

const Page = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleUpdateForm = (key: keyof FormState, value: string): void => {
    setForm({ ...form, [key]: value });
  };

  const { mutate, loading, error, data } = useCreateJob();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { title, description } = form;
    mutate(title, description);
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
