import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import  clsx from 'clsx';
const Cart = () => {
    const [cartStatus , setcartStatus] = useState(0);
    const status = clsx(cartStatus, 'active-cart' &&  'disable-cart');
  return (
    <div className="text-right ">
      <Link href="/cart">
        <a className={`${status} text-xl`}>
          <FontAwesomeIcon icon={faCartPlus} />
          <span className="text-sm ">1</span>
        </a>
      </Link>
    </div>
  );
};

export default Cart;
