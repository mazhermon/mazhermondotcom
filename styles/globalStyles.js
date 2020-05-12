import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        color: ${(props) => props.theme.colors.black};

        font-family: ${(props) => props.theme.fonts.typeface.sans};
        font-weight: 500;
        font-style: normal;
    
        font-size: 100%;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        line-height: 1.5;
        background-color: ${(props) => props.theme.colors.bg};

        @media (prefers-color-scheme: dark) {
            background-color: ${(props) => props.theme.darkMode.bg};
            color: ${(props) => props.theme.darkMode.copy};
        }

        /* @media screen and (min-width: 700px) {
            font-size: 1.1rem;
        } */
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${(props) => props.theme.fonts.typeface.serifbold};
    }

`;

export default GlobalStyles;
