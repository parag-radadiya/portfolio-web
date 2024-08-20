import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/shared/Layout/Layout";
import Head from "next/head";

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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
