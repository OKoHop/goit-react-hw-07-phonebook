import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
ul {
    padding: 0;
    margin: 0;
    list-style: none;
};

img {
    display: block;
    max-width: 100%;
}

h1, h2, h3, h4, h5, h5, p {
    padding: 0;
    margin: 0;
}

div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;