import { ReactNode } from "react";

const FlexWrapper = (props:{children:ReactNode}) =>{
    return(
        <div className="flex flex-wrap">
            {props.children}
        </div>
    )
}
export default FlexWrapper;