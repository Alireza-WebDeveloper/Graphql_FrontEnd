import { useState } from "react";

import { FormState } from "../../Components/create-job/index.type";
import Form from "../../Components/create-job/form";

const Page = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleUpdateForm = (key: keyof FormState, value: string): void => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
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
