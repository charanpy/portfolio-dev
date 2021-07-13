import Head from 'next/head';
import CustomThemeProvider from '../providers/ThemeProvider';
import Header from '../layout/Header/Header.component';
import GlobalStyle from '../styles/global.style';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <CustomThemeProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
