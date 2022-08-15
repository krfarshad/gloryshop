import Header from "../header/Header";
import { productApi } from "../../utils/productApi/productApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { productApiProp } from "../../types/types";
import Container from "@gloryshop/Layout/Container";
import FlexWrapper from "@gloryshop/Layout/FlexWrapper";
import ProductInfo from "./productInfo/ProductInfo";
import ProductThumbnail from "./productThumbnail/ProductThumbnail";
import Footer from "../footer/Footer";
export const SingleProduct = () => {
  const queryString = useRouter();
  const id = queryString.query.productid;
  const { isLoading, isError, data } = useQuery<productApiProp>(
    ["products", id],
    productApi
  );
  return (
    <>
      <Header />
      {isLoading && <p className="text-center py-8">loading....</p>}
      {isError && <p className="text-center py-8">whoops sth is wrong</p>}
      {data && (
        <Container>
          <FlexWrapper className="items-center ">
            <ProductThumbnail product={data}  />
            <ProductInfo product={data} />
          </FlexWrapper>
        </Container>
      )}
      <Footer />
    </>
  );
};
