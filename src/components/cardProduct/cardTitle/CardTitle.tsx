import React from "react";
import Link from "next/link";
type cardTitleProps ={
  title:string,
  id:number
}
export const CardTitle = (props:cardTitleProps) => {
    const {id, title} = props;
  return (
    <div className="product-title">
      <h2 className="font-bold text-md p-2">
        <Link href={`product/${id}`}>
          <a>{title}</a>
        </Link>
      </h2>
    </div>
  );
};
