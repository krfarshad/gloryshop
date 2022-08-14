import { ReactNode } from "react";

const FlexWrapper = (props:{children:ReactNode ,className ?: string}) =>{
    return(
        <div className={`flex flex-wrap ${props.className}`}>
            {props.children}
        </div>
    )
}
export default FlexWrapper;