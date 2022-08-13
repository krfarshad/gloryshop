import { productApiProps } from "../../types/types";
import { CardFooter } from "./cardFooter/CardFooter";
import { CardImage } from "./cardImage/CardImage";
import { CardTitle } from "./cardTitle/CardTitle";
type singleProductProps ={
    data:productApiProps
}
const CardProduct = ({data}:singleProductProps) =>{
    return(
        <>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 py-4">
                <div className="product-inner bg-white shadow-md shadow-slate-200 rounded-sm transition-all hover:shadow-xl hover:transition-all hover:shadow-state-800">
                    {/* product image */}
                    <CardImage id={data.id}  src={data.thumbnail} />
                    {/* product title */}
                    <CardTitle id={data.id} title={data.title} />
                    {/* product price */}
                    <CardFooter price={data.price}  />
                </div>
            </div>
        </>
    )
}
export default CardProduct;