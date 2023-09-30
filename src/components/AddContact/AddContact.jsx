import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledField,
} from './AddContact.styled';
import { addContact } from 'redux/slice';

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(10, 'Too Short!').required('Required'),
});

export const AddContact = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(addContact({ id: nanoid(), ...values }));
          actions.resetForm();
        }}
        validationSchema={addContactSchema}
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField name="name" placeholder="Enter name"></StyledField>
            <ErrorMessage name="name" />
          </StyledLabel>
          <StyledLabel>
            Number
            <StyledField name="number" placeholder="0631234567"></StyledField>
            <ErrorMessage name="number" />
          </StyledLabel>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
