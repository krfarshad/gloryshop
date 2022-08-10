import React, { ReactNode } from 'react';
type ContainerProps ={
    children  : ReactNode | null ,
    className ?:string
}
const Container= (props:ContainerProps) =>{
    return(
        <div  className={`container mx-auto px-2 py-2 ${props.className}`}>
            {props.children}
        </div>
    )
}
export default Container;