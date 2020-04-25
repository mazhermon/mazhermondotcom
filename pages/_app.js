import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

const theme = {
  colors: {
    primary: '#0070f3',
    bgDarkMode: '#332e2e',
    textDarkMode: '#ece8e8',
  },
};

// do dark mode setup later maybe

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
