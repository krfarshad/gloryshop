import Container from "../layout/Container/Container";
import React from "react";
import Link from "next/link";
import FlexWrapper from "../layout/FlexWrapper/FlexWrapper";
const Header:React.FC  = () => {
    return(
        <Container>
            {/* logo */}
            <FlexWrapper>

            <div className="logo w-1/2 md:w-1/5"><span className="font-bold text-2xl text-blue-900">GloryStore</span></div>
            {/* menu */}
                <div className="menu w-1/2 md:w-4/5">
                
                        <ul className="text-right">
                            <li className="inline-block mx-2 my-1"><Link href="/"><a  className="p-2  text-state-600">Home page</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/products'><a  className="p-2  text-state-600">Products</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/cart'><a  className="p-2  text-state-600">Cart</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/about-us'><a  className="p-2  text-state-600">About us</a></Link></li>
                            <li className="inline-block mx-2 my-1"><Link href='/contact-us'><a  className="p-2  text-state-600">Contact us</a></Link></li>
                        </ul>
                </div>
                </FlexWrapper>

        </Container>
    )
}
export default Header;