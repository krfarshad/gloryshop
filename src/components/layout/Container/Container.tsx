import React, { ReactNode } from 'react';
type ContainerProps ={
    children  : ReactNode | null
}
const Container= (props:ContainerProps) =>{
    return(
        <div className="container mx-auto px-2 py-2">
            {props.children}
        </div>
    )
}
export default Container;