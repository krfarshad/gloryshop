import React from "react";
import { useQuery } from "@tanstack/react-query";
import { productApiProps } from "../../types/types";
import { GetStaticProps } from "next";

export const productApi = async (id?:any) => {
  // let postId =  (id.queryKey[1]) ? id.queryKey[1] : " ";
  let postId = id.queryKey[1] ? id.queryKey[1] : " ";
  let res = await fetch(`https://dummyjson.com/products/${postId}`);
  let result = await res.json();

  return await result;
};

export async function getStaticProps(context:any) {
  const posts = await productApi();
  return { props: { posts } };
}
