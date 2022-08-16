import React from "react";
import { productProp } from "../../../types/types";
import Button from "@gloryshop/Button";
const ProductInfo = (props: productProp) => {
    const {product} = props;


    const HandleAddToCart = () =>{
      // localStorage.removeIteme('cartItems');
      const current_id = product.id;
      const cartLists = JSON.parse(localStorage.getItem('cartItems')!);

      // create globalStorage for first time
      if(!cartLists){
        const new_product = [{id:current_id , count:1}]
        localStorage.setItem('cartItems' , JSON.stringify(new_product))
        // update storage
      }else{
        const cartListCurrent =cartLists.findIndex((object:any)=> {
          return object.id === current_id;
        });
        console.log(cartListCurrent)
        if(cartListCurrent || cartListCurrent ==0){
         const update_count = cartLists.map((item:any) => {
            if(item.id === cartListCurrent ){
              item.count + 1
            }
          })
        localStorage.setItem('cartItems' , JSON.stringify(update_count))

        }
        else{
          const new_items  = [...cartLists , {id:current_id , count: 1}];
          localStorage.setItem('cartItems' , JSON.stringify(new_items))

        }
      }
      console.log(cartLists)
    }
  return (
    <>
      <div className="w-full md:w-1/2 my-8 px-2">
        {/* title */}
        <div className="product-title">
            <h1 className="font-bold text-2xl mb-2">{product.title}</h1>
        </div>
        {/* product desc */}
        <div>
            <p>{product.description}</p>
        </div>
        {/* brand */}
        <div>
            {product.brand}
        </div>
        {/* category */}
        <div>
            <p className="p-2 border border-slate-300 text-slate-500 text-sm rounded-md my-3 inline-block">{product.category}</p>
        </div>
        {/* stock */}
        <div>
            <p>in stock : </p> <p className="p-1 rounded-full text-white bg-red-500 inline-block">{product.stock}</p>
        </div>
        {/* price */}
        <div>
           <p className="text-green-500 font-bold text-lg my-4"> $ {product.price}</p>
        </div>
        {/* add to cart */}
        <div>
            <button className="bg-green-400 rounded-md text-white tet-lg  py-2 px-4" onClick={HandleAddToCart}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
