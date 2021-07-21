import React from 'react';
import Head from 'next/head';
import CustomThemeProvider from '../providers/ThemeProvider';
import AlertProvider from '../providers/ModalProvider';
import Header from '../layout/Header/Header.component';
import GlobalStyle from '../styles/Global.style';
import '../styles/globals.css';
import PageTransition from '../layout/PageTransition/PageTransition.component';
import ToastrComponent from '../components/Toastr/Toastr.component';
import ToastrProvider from '../providers/ToastrProvider';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <CustomThemeProvider>
        <AlertProvider>
          <ToastrProvider>
            <GlobalStyle />
            <Header />
            <ToastrComponent />
            <PageTransition route={router.route}>
              <Component {...pageProps} />
            </PageTransition>
          </ToastrProvider>
        </AlertProvider>
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
