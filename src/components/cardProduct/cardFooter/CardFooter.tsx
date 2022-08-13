import React from "react";
type priceApp={
  price:number
}
export const CardFooter = (props:priceApp) => {
  const {price} = props;
  return (
    <div className="product-footer">
      <p className=" text-green-600 text-md font-bold text-right p-4">
        $ {price}
      </p>
    </div>
  );
};
