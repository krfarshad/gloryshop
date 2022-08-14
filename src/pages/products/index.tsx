import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Error from "next/error";
import Header from "../../components/header/Header";
import Main from "@gloryshop/Layout/Main";
import { productApi } from "../../utils/productApi/productApi";
import { productApiProps } from "../../types/types";
import CardProduct from "../../components/cardProduct/CardProduct";
type productProps = {
  products: productApiProps[];
};

const Products: NextPage = () => {
  const { isError, isLoading, data } = useQuery<productProps>(
    ["products"],
    productApi
  );

  console.log(data);
  return (
    <>
      <Header></Header>
      {isLoading && <p className="text-center py-8">loading....</p>}
      {isError && <p className="text-center py-8">whoops sth is wrong</p>}
      {data != undefined && (
        <Main>
          <div className="flex flex-wrap product-box-wrapper  py-5">
            {Array.from(data.products).map((item) => {
              return <CardProduct data={item} key={item.id} />;
            })}
          </div>
        </Main>
      )}
    </>
  );
};
export default Products;
