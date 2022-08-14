import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Error from "next/error";
import  Products  from "../../views/products/Products";

const ShopPage: NextPage = () => {

  return (
    <Products />
  );
};
export default ShopPage;
