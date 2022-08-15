import React from "react";
import Link from "next/link";
import FlexWrapper from "@gloryshop/Layout/FlexWrapper";
import Container from "@gloryshop/Layout/Container";
import Cart from "./cart/Cart";
const Header:React.FC  = () => {
    return(
        <Container className="border-b-2 border-state-600 ">
            {/* logo */}
            <FlexWrapper className="py-2" >

            <div className="logo w-1/2 md:w-1/5"><span className="font-bold text-2xl text-blue-900">GloryStore</span></div>
            {/* menu */}
                <div className="menu w-1/2 md:w-4/5 flex  justify-end items-center">
                
                        <ul className="text-right hidden md:block">
                            <li className="inline-block mx-2 my-1"><Link href="/"><a  className="p-2  text-state-600 text-sm">Home page</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/products'><a  className="p-2  text-state-600 text-sm">Products</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/cart'><a  className="p-2  text-state-600 text-sm">Cart</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/about-us'><a  className="p-2  text-state-600 text-sm">About us</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/contact-us'><a  className="p-2  text-state-600 text-sm">Contact us</a></Link></li>
                        </ul>
                       <Cart />
                </div>
                </FlexWrapper>

        </Container>
    )
}
export default Header;