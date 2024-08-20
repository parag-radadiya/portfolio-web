import type { NextPage } from "next";
import Head from "next/head";
import MainPage from "../components/page/MainPage";

const Home: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="" />
        <title>website</title>
        <meta name="description" content="" />
      </Head>
    );
  };

  const getHomeComponent = () => {
    return (
      <>
        <MainPage />
      </>
    );
  };

  return (
    <>
      {getHeader()}
      {getHomeComponent()}
    </>
  );
};

export default Home;
