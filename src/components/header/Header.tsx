import React from "react";
import Link from "next/link";
import FlexWrapper from "@gloryshop/Button/FlexWrapper";
import Container from "@gloryshop/Layout/Container";
const Header:React.FC  = () => {
    return(
        <Container className="border-b-2 border-state-600 py-4">
            {/* logo */}
            <FlexWrapper >

            <div className="logo w-1/2 md:w-1/5"><span className="font-bold text-2xl text-blue-900">GloryStore</span></div>
            {/* menu */}
                <div className="menu w-1/2 md:w-4/5">
                
                        <ul className="text-right">
                            <li className="inline-block mx-2 my-1"><Link href="/"><a  className="p-2  text-state-600 text-sm">Home page</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/products'><a  className="p-2  text-state-600 text-sm">Products</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/cart'><a  className="p-2  text-state-600 text-sm">Cart</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/about-us'><a  className="p-2  text-state-600 text-sm">About us</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/contact-us'><a  className="p-2  text-state-600 text-sm">Contact us</a></Link></li>
                        </ul>
                </div>
                </FlexWrapper>

        </Container>
    )
}
export default Header;