import React from "react";
import {
  FormFieldContainer,
  Label,
  FormFieldBtn,
  FormFieldInput,
} from "./FormField.styled";

function FormField({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <>
      <FormFieldContainer>
        <Label htmlFor={name}>{labelName}</Label>
        {isSurpriseMe && (
          <FormFieldBtn type="button" onClick={handleSurpriseMe}>
            Surprise me
          </FormFieldBtn>
        )}
      </FormFieldContainer>
      <FormFieldInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </>
  );
}

export default FormField;
