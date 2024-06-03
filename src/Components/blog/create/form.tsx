import React from "react";
import { FormState } from "./index.type";
import TextField from "../../Common/Main/form/text-field";
import ButtonContainer from "../../Common/Main/button-container";

interface FormProps {
  form: FormState;
  handleSubmit(e: React.FormEvent): void;
  handleUpdateForm(key: keyof FormState, value: string): void;
}
const Form: React.FC<FormProps> = ({
  form,
  handleUpdateForm,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="text-center flex flex-col space-y-4"
    >
      <TextField
        name="title"
        type="text"
        label="title"
        value={form.title}
        onChange={(e) => handleUpdateForm("title", e.target.value)}
      />
      <TextField
        name="content"
        type="text"
        label="content"
        value={form.content}
        onChange={(e) => handleUpdateForm("content", e.target.value)}
      />
      <TextField
        name="author"
        type="text"
        label="author"
        value={form.author}
        onChange={(e) => handleUpdateForm("author", e.target.value)}
      />

      <ButtonContainer color="blue" fontSize="large" type="submit">
        submit
      </ButtonContainer>
    </form>
  );
};

export default Form;
