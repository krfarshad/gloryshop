import React from 'react'
import Main from '@gloryshop/Layout/Main';
import Header from '../header/Header';
import { useQuery } from '@tanstack/react-query';
import CardProduct from './cardProduct/CardProduct';
import { productApi } from "../../utils/productApi/productApi";
import { productProps } from '../../types/types';
import Footer from '../footer/Footer';
const Products = () => {
  const { isError, isLoading, data } = useQuery<productProps>(
    ["products"],
    productApi
  );
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
    <Footer></Footer>
  </>
  )
}
export default Products;