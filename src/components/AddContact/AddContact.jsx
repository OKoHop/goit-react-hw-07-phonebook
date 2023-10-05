import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledField,
} from 'components/AddContact/AddContact.styled';
import { addContact } from 'redux/operations';

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.number().min(10, 'Too Short!').required('Required'),
});

export const AddContact = () => {
  const dispatch = useDispatch();
  const nameContacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={(values, actions) => {
          if (
            nameContacts.find(
              contact =>
                contact.name.toLowerCase() === values.name.toLowerCase()
            )
          ) {
            return alert(`${values.name} is already in contact!`);
          }
          dispatch(addContact({ ...values }));
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
            Phone
            <StyledField
              name="phone"
              placeholder="0631234567"
              type="phone"
            ></StyledField>
            <ErrorMessage name="number" />
          </StyledLabel>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
