import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        /* font-family: neue-haas-grotesk-text, sans-serif; */
    
        font-family: le-monde-livre-std, serif;
        font-weight: 400;
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
        font-size: 0.9rem;
        line-height: 1.1rem;

        @media (prefers-color-scheme: dark) {
            background-color: ${(props) => props.theme.colors.bgDarkMode};
            color: ${(props) => props.theme.colors.textDarkMode};
        }
    }


    h1,h2,h3,h4,h5,h6 {
        font-family: neue-haas-grotesk-display, sans-serif;
    }


`;

export default GlobalStyles;

// Le Monde Livre Std Book

// font-family: le-monde-livre-std, serif;

// font-weight: 400;

// font-style: normal;

// Le Monde Livre Std Bold

// font-family: le-monde-livre-std, serif;

// font-weight: 700;

// font-style: normal;
