import React from "react";
import Main from "@gloryshop/Layout/Main";
import Header from "../header/Header";
import { useQuery } from "@tanstack/react-query";
import CardProduct from "./cardProduct/CardProduct";
import { productApi } from "../../utils/productApi/productApi";
import { productsProp } from "../../types/types";
import Footer from "../footer/Footer";
import Container from "@gloryshop/Layout/Container";
const Products = () => {
  const { isError, isLoading, data } = useQuery<productsProp>(
    ["products"],
    productApi
  );
  return (
    <>
      <Header/>
      {isLoading && <p className="text-center py-8">loading....</p>}
      {isError && <p className="text-center py-8">whoops sth is wrong</p>}
      {data &&(
        <Main>
          <Container>
            <div className="flex flex-wrap product-box-wrapper  py-5">
              {Array.from(data.products).map((item) => {
                return <CardProduct data={item} key={item.id} />;
              })}
            </div>
          </Container>
        </Main>
      )}
      <Footer />
    </>
  );
};
export default Products;
