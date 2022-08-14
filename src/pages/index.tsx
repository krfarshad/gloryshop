import type { GetStaticPaths, NextPage } from "next";

import { Home } from "../views/home/Home";
const Index: NextPage = () => {
  return <Home />;
};
export default Index;
