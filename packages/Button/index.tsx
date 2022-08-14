import React from 'react';
import Link from 'next/Link';
interface buttonProps{
  children ?:string ,
  className ?: string,
  id ?:string,
  href ?:string
}
const Button =(props:buttonProps):JSX.Element =>{
  const {className  , children , id , href} =props;
  const buttonClass = className ? className : 'py-2 mx-auto rounded-lg px-6  bg-slate-600 text-white';
  const text        = children  ?  children: 'click here' ; 
  const buttonId    = id        ? id: '' ; 
  const target      = href      ? href : null ;
  return (
    <>
      <button className={buttonClass} id={buttonId}>
        { (target) ? <Link href={target}><a >{text}</a></Link> : `${text}` }
      </button>
    </>
  )
}
export default Button;