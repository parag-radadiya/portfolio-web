import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "./components/shared/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <html lang="en-US" />
        <meta name="robots" content="index, follow" lang="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          lang="en"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
