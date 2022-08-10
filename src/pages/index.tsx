import type { NextPage } from "next";
import Main from "../components/layout/Main/Main";
import Head from "next/head";
import Header from "../components/header/Header";
import Button from '@gloryshop/Button';
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
          <Button className="p-2 mx-auto rounded-sm  bg-lime-200 table mt-8" id="shop_link" href="/products">Products</Button>
        </Main>
      </div>
    </>
  );
};

export default Home;