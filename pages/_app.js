import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

export const theme = {
  colors: {
    bg: '#F8F8FD',
    bgLight: '#BFDCDF',
    bgSuperLight: '#EBFFFB',

    copy: '#41414B',

    primary: '#8C7EBF',
    primaryDark: '#464A8C',

    secondary: '#3061F2',
    secondaryLight: '#7292F2',
    secondaryDark: '#134BF2',

    accent1: '#F24150',
    accent2: '#F2A7B5',
    accent3: '#FDF9BC',

    black: '#41414B',
    white: '#F8F8FD',
    gray1: '#F8F8FD',
    gray2: '#B0B0BF',
    gray3: '#A0A0BC',
    gray: '#8C7EBF',
  },

  fonts: {
    typeface: {
      serifbold: 'clarendon-urw-extra-narrow, serif',
      serif: 'clarendon-urw, serif',
      sans: 'itc-avant-garde-gothic-pro, sans-serif',
    },
    size: {},
  },

  darkMode: {
    bg: '#332e2e',
    copy: '#ece8e8',
  },
};

// TODO
// const themeDark = {

// }

// do dark mode setup later maybe

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
