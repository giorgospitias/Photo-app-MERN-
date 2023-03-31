import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: rgb(17 24 39);
`;

export const FormFieldBtn = styled.button`
  font-weight: 600;
  font-size: 12px;
  background-color: #ececf1;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  color: #1a202c;
  border-color: transparent;
  cursor: pointer;
`;

export const FormFieldInput = styled.input`
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  color: #1f2937;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  padding: 0.75rem;
`;
