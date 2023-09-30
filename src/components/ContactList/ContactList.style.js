import { styled } from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    gap: 10px;
`
export const StyledH2 = styled.h2`
    margin-bottom: 15px;
`

export const StyledUl = styled.ul`
    margin-top: 15px;
`

export const StyledButton = styled.button`
    background-color: inherit;
    border: 1px solid black;
    border-radius: 4px;

    &:focus {
        background-color: blue;
    }
`