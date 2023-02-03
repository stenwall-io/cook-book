import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import theme from '@styles/theme';
import globalStyles from '@styles/globalStyles';
import { SWRConfig } from 'swr';

const fetcher = (query: string) =>
  fetch(query)
    .then((res) => res.json())
    .then((json) => json);

const MyApp = ({ Component, pageProps }: AppProps) => {
  // const getLayout = Component.getLayout || ((page: ReactNode) => page);
  globalStyles();

  return (
    <>
      <Head>
        <title>Cook Book</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          shouldRetryOnError: true,
          fetcher,
        }}
      >
        <NextUIProvider theme={theme}>
          {/* {getLayout(<Component {...pageProps} />)} */}
          <Component {...pageProps} />
        </NextUIProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
