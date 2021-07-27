import React from 'react';
import Head from 'next/head';
import MongoService from '../lib/MongoService';
import CustomThemeProvider from '../providers/ThemeProvider';
import AlertProvider from '../providers/ModalProvider';
import ToastrProvider from '../providers/ToastrProvider';
import Header from '../layout/Header/Header.component';
import PageTransition from '../layout/PageTransition/PageTransition.component';
import ToastrComponent from '../components/Toastr/Toastr.component';
import CollabrateComponent from '../components/Collobrate/Collobrate.component';
import '../styles/globals.css';
import GlobalStyle from '../styles/Global.style';

function MyApp({ Component, pageProps, router }) {
  MongoService();
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
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
            <CollabrateComponent />
          </ToastrProvider>
        </AlertProvider>
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
