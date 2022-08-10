import { productApi } from "../../types/types";
type ApiProps ={

}
const productApi = async (id:number) =>{
    // let postId =  (id.queryKey[1]) ? id.queryKey[1] : " ";
    let postId = " ";
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await res.json();
}


export default productApi;