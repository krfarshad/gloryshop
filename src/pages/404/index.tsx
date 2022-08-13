import { NextPage } from 'next';
import React from 'react'
import Header from '../../components/header/Header';

 const NotFound:NextPage = () => {
  return (
   <>
    <Header></Header>
    <div><p className='text-center py-8 mx-auto'> 404 - Nothing Found</p></div>
    </>
  )
}
export default NotFound;