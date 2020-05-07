import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

export const theme = {
  colors: {
    bg: '',
    copy: '',

    primary: '#8C7EBF',
    primaryDark: '#464A8C',

    secondary: '#3061F2',
    secondaryLight: '#7292F2',
    secondaryDark: '#134BF2',

    accent1: '#F24150',
    accent2: '#F2A7B5',
    accent3: '#FDF9BC',

    bgLight: '#BFDCDF',
    bgSuperLight: '#EBFFFB',

    black: '#41414B',
    gray1: '#F8F8FD',
    gray2: '#B0B0BF',
    gray3: '#A0A0BC',
    gray: '#8C7EBF',
  },

  fonts: {
    typeface: {
      serifbold: 'clarendon-urw-extra-narrow, serif',
      serif: 'clarendon-urw, serif',
      script: 'viktor-script, sans-serif',
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
