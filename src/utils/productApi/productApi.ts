import { productsProp } from "../../types/types";
// any could be propr prop
export const productApi = async (id?:any):Promise<any> => {
  // let postId =  (id.queryKey[1]) ? id.queryKey[1] : " ";
  let postId = id.queryKey[1] ? id.queryKey[1] : " ";
  return ( await fetch(`https://dummyjson.com/products/${postId}`)).json();
};

export async function getStaticProps(context:any) {
  const posts = await productApi();
  return { props: { posts } };
}
