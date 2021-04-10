import { GlobalStyle } from '../theme/components';
import { SEO } from '../components';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import theme from '../theme';

const baseUrl = process.env.NEXT_PUBLIC_URL;

const MyApp = props => {
  const { Component, pageProps, router } = props;
  const { pathname } = router;

  const url = `${baseUrl}${pathname === '/' ? '' : `/${pathname}`}`;

  return (
    <ThemeProvider theme={theme}>
      <SEO url={url} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
  router: PropTypes.object
};

export default MyApp;
