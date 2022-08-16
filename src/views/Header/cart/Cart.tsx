import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import  clsx from 'clsx';
const Cart:React.FC = () => {
  const [cartItems, setCartItems] = React.useState<any>([]);

   React.useEffect(() => {
    const cartLists = localStorage.getItem('cartItems');
    if(cartLists){
       const cartListItems =  JSON.parse(cartLists);
       setCartItems(cartListItems);
    }
    }, []);
 
    const status = clsx(cartItems, 'text-green-400' &&  'text-red-500');
  return (
    <div className="text-right ">
      <Link href="/cart">
        <a className={`${status} text-xl`}>
          <FontAwesomeIcon icon={faCartPlus} />
          <span className="text-sm ">{cartItems ? cartItems.length : 0}</span>
        </a>
      </Link>
    </div>
  );
};

export default Cart;

