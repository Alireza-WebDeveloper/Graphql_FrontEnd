// !! Package
import React, { useState } from "react";
// !! Components
import ButtonContainer from "../../Components/Common/Main/button-container";
import TextField from "../../Components/Common/Main/form/text-field";
import ApolloServerProvider from "../../hooks/account/index.Base";
import { useEditAccount } from "../../hooks/account/use-http";

// ?? Types
type FormState = {
  username: string;
  password: string;
};

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [form, setForm] = useState<FormState>({ username: "", password: "" });
  const { handleEdit } = useEditAccount();

  const handleUpdate = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleEdit(form.username, form.password);
  };

  return (
    <ApolloServerProvider>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 mx-auto w-[340px]"
      >
        <TextField
          name="username"
          type="text"
          label="username"
          value={form.username}
          onChange={(e) => handleUpdate("username", e.target.value)}
        />
        <TextField
          name="password"
          type="password"
          label="password"
          value={form.password}
          onChange={(e) => handleUpdate("password", e.target.value)}
        />
        <ButtonContainer color="green" fontSize="large" type="submit">
          update
        </ButtonContainer>
      </form>
    </ApolloServerProvider>
  );
};

export default Page;
