import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Header from "../../components/header/Header";
import Container from "../../components/layout/Container/Container";
import Main from "../../components/layout/Main/Main";

const Products = () => {
  //  let products = useQuery();

  return (
    <>
      <Header></Header>
      <Main>
        <div className="flex flex-wrap">
          <div className="product-box-wrapper p-2">
            <div className="product-box">dd</div>
          </div>
        </div>
      </Main>
    </>
  );
};
export default Products;
