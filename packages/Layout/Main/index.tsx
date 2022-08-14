import { ReactNode } from "react";

const Main = (props:{children:ReactNode ,className ?: string}) =>{
    return(
        <div className={` ${props.className}`}>
            {props.children}
        </div>
    )
}
export default Main;


