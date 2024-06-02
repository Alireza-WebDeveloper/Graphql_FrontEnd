import React from "react";
import { FormState } from "./index.type";
import TextField from "../Common/Main/form/text-field";
import ButtonContainer from "../Common/Main/button-container";
import TextArea from "../Common/Main/text-area";

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
      <TextArea
        label="descriotion"
        value={form.description}
        setValue={(value: any) => handleUpdateForm("description", value)}
      />
      <ButtonContainer color="blue" fontSize="large" type="submit">
        submit
      </ButtonContainer>
    </form>
  );
};

export default Form;
