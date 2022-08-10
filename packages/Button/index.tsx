import React from 'react';
import Link from 'next/Link';
interface buttonProps{
  children ?:string ,
  className ?: string,
  id ?:string,
  link ?:string
}
const Button =(props:buttonProps):JSX.Element =>{
  const {className  , children , id , link} =props;
  const buttonClass = className ? className : 'p-2 mx-auto rounded-sm  bg-lime-200';
  const text        = children  ?  children: 'click here' ; 
  const buttonId    = id        ? id: '' ; 
  const target      = link      ? link : null ;
  return (
    <>
      <button className={buttonClass} id={buttonId}>
        { (target) ? <Link href={target}><a >{text}</a></Link> : `${text}` }
      </button>
    </>
  )
}
export default Button;