import React, { ReactNode } from 'react';

type MainProps ={
    children  : ReactNode | null
}
const Main = (props:MainProps) =>{
    return(
        <div className="container mx-auto px-2 py-2">
            {props.children}
        </div>
    )
}
export default Main;