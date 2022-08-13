import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Error from "next/error";
import Header from "../../components/header/Header";
import Main from "../../components/layout/Main/Main";
import {productApi} from "../../utils/productApi/productApi";
import { productApiProps } from "../../types/types";
import CardProduct from '../../components/cardProduct/CardProduct'
type productQueryProps = {

}
const Products:NextPage = () => {

  const { isError , isLoading , data} = useQuery<[productApiProps]>(['products'],productApi);

  return (
    <>
      <Header></Header>
      {isLoading &&  <p className="text-center py-8">loading....</p>}
      {isError   &&  <p className="text-center py-8">whoops sth is wrong</p>}
      {data != undefined && 
           <Main>
             <div className="flex flex-wrap product-box-wrapper  py-5">
               {
                Array.from(data).map(item=>{
                  return (<CardProduct data={item} key={item.id}/>)
                })
               }
             </div>
         </Main>
      }
    </>
  );
};
export default Products;
