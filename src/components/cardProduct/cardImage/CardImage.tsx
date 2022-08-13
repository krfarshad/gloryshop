import React from "react";
import Link from "next/link";
import Image from "next/image";
type cardImageProps ={
    id:number,
    src : string
}
export const CardImage = (props:cardImageProps) => {
    const {id , src} = props;
  return (
    <div className="product-image cursor-pointer ">
      <Link href={`product/${id}`}>
        <a>
          <Image src={src} width={300} height={200} />
        </a>
      </Link>
    </div>
  );
};
