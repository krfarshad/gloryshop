import React, { useState } from "react";
import { productProp } from "../../../types/types";
import Image from "next/image";
const ProductThumbnail = (props: productProp) => {
  const { product } = props;
  const [featureImage , setFeatureImage] = useState<string>(product.thumbnail);
  const HandleFeatureImage = (e:any) =>{
    setFeatureImage(e.target['data-loaded-src'])
  }
  return (
    <>
      <div className="w-full md:w-1/2 my-6">
        <div className="thumbnail">
          <figure className="w-full text-center" >
            <Image
              width={600}
              height={400}
              src={featureImage}
              className="rounded-lg"
            />
          </figure>
          <div className="gallery flex justify-center items-center py-6 px-2 gap-2">
            {product.images.map((image) => {
              return (
                  <div key={image}>
                    <figure >
                      <Image
                        src={image}
                        width={75}
                        height={75}
                        className="object-cover cursor-pointer"
                        onMouseEnter={HandleFeatureImage}
                      />
                    </figure>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductThumbnail;
