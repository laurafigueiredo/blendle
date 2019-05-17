import { createGlobalStyle } from "styled-components";

import fontFaces from './font-face';
import normalize from './normalize';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
    ${ normalize }
    ${ variables }
    ${ fontFaces }

    html,
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-family: 'Inter', sans-serif;
        font-weight: var(--font-weight-regular);
        font-size: var(--global-font-size);
        color: var(--blue-600);
        background-color: var(--grey-100);
    }
`;


export default GlobalStyles;