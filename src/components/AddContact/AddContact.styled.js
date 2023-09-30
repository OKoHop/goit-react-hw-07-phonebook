import { styled } from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid black;
    margin: 15px auto;
    padding: 10px;
`

export const StyledField = styled(Field)`
    margin-left: auto;
`

export const StyledButton = styled.button`
    width: 150px;
    paddig: 10px;
    margin: 0 auto;
    background-color: inherit;
    border: 1px solid black;
    border-radius: 5px;
`

export const StyledLabel = styled.label`
    display: flex;
    gap: 20px;
`