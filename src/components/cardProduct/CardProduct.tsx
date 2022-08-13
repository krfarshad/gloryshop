import Image from "next/image";
import Link from "next/link";
import { productApiProps } from "../../types/types";
import { productApi } from "../../utils/productApi/productApi";
type singleProductProps ={
    data:productApiProps
}
const CardProduct = ({data}:singleProductProps) =>{
    return(
        <>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 py-4">
                <div className="product-inner bg-white shadow-md shadow-slate-200 rounded-sm transition-all hover:shadow-xl hover:transition-all hover:shadow-state-800">
                    {/* product image */}
                    <div className="product-image cursor-pointer ">
                        <Link href={`product/${data.id}`}><a><Image src={data.thumbnail} width={300} height={200} /></a></Link>
                    </div>
                    {/* product title */}
                    <div className="product-title">
                        <h2 className="font-bold text-md p-2"><Link href={`product/${data.id}`}><a>{data.title}</a></Link></h2>
                    </div>
                    {/* product price */}
                    <div className="product-footer">
                        <p className=" text-green-600 text-md font-bold text-right p-4">$ {data.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardProduct;