import React from "react";
import { productProp } from "../../../types/types";
import Button from "@gloryshop/Button";
const ProductInfo = (props: productProp) => {
    const {product} = props;
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
            <p className="p-2 bg-green-500 text-white rounded-md my-2 inline-block">{product.category}</p>
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
            <Button>Add to cart</Button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
