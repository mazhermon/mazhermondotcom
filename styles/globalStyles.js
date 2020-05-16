import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        color: ${(props) => props.theme.colors.black};

        font-family: ${(props) => props.theme.fonts.typeface.sans};
        font-weight: 500;
        font-style: normal;
    
        font-size: 100%;

        @media screen and (min-width: 1800px) {
            font-size: 130%;
        }
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.5;
        background-color: ${(props) => props.theme.colors.bg};

        @media (prefers-color-scheme: dark) {
            background-color: ${(props) => props.theme.darkMode.bg};
            color: ${(props) => props.theme.darkMode.copy};
        }

        @media screen and (min-width: 700px) {
            font-size: 1rem;
        }
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${(props) => props.theme.fonts.typeface.serifbold};
    }

    .h-visually-hidden { 
        position: absolute !important;
        height: 1px; 
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        white-space: nowrap; /* added line */
    }

`;

export default GlobalStyles;
