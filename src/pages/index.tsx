import type { NextPage } from "next";
import Main from "../components/layout/Main/Main";
import Head from "next/head";
import Header from "../components/header/Header";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GloryStore</title>
      </Head>
      <Header />
      <div>
        <Main>
          <h1 className="font-bold text-center mt-8"> WElcome GloryStore</h1>
        </Main>
      </div>
    </>
  );
};

export default Home;
