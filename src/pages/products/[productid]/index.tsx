import { NextPage } from "next";
import Header from "../../../components/header/Header";
import FlexWrapper from "../../../components/layout/FlexWrapper/FlexWrapper";
import Container from "../../../components/layout/Container/Container";
import { productApi } from "../../../utils/productApi/productApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { productApiProps } from "../../../types/types";
const SingleProduct: NextPage = (props) => {
  const queryString = useRouter();
  const id = queryString.query.productid;
  const { isLoading, isError, data } = useQuery<productApiProps>( ["products", id], productApi );
  console.log(data)
  return (
    <>
      <Header></Header>
      {isLoading && <p className="text-center py-8">loading....</p>}
      {isError && <p className="text-center py-8">whoops sth is wrong</p>}
      {console.log(data)}
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

