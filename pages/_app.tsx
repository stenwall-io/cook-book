// import '../styles/styles.scss';
import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import theme from '@styles/theme';
import { SWRConfig } from 'swr';

const fetcher = (query: string) =>
  fetch(query)
    .then((res) => res.json())
    .then((json) => json);

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const getLayout = Component.getLayout || ((page: ReactNode) => page);

  // useEffect(() => {
  //   // remove the server-side injected CSS
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles?.parentElement?.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>Cook Book</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          shouldRetryOnError: true,
          fetcher,
        }}
      >
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* {getLayout(<Component {...pageProps} />)} */}
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
