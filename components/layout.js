import Head from 'next/head';
import Link from 'next/link';
import GlobalStyles from '../styles/globalStyles';

const name = 'Maz Hermon';
export const siteTitle = 'mazhermon';

function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="A test space for Maz hermon, front end developer from Wellington, NZ."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/atm4hil.css"
        ></link>
      </Head>
      {/* <GlobalStyles /> */}
      <header></header>
      <main>{children}</main>
    </div>
  )
}

export default Layout;
