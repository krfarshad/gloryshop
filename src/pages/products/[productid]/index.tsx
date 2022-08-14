import { NextPage } from "next";
import Header from "../../../views/header/Header";
import { productApi } from "../../../utils/productApi/productApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { productApiProps } from "../../../types/types";
import Container from "@gloryshop/Layout/Container";
import FlexWrapper from "@gloryshop/Layout/FlexWrapper";

const SingleProduct: NextPage = (props) => {
  const queryString = useRouter();
  const id = queryString.query.productid;
  const { isLoading, isError, data } = useQuery<productApiProps>( ["products", id], productApi );
  return (
    <>
      <Header></Header>
      {isLoading && <p className="text-center py-8">loading....</p>}
      {isError && <p className="text-center py-8">whoops sth is wrong</p>}
      {data != undefined && (
        <Container>
          <FlexWrapper>
            product
            {/* product info */}
            <div className="w-1/2">{/* product */}</div>
            {/* product thumbnail */}
            <div className="w-1/2"></div>
          </FlexWrapper>
        </Container>
      )}
    </>
  );
};
export default SingleProduct;

