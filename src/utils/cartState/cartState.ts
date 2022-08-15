import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
const CartState = () => {
    const [cartItems , setCartItems] = useState<[]>([])
    return cartItems;
};

const {data} = useQuery<any>(['cartItems'] , CartState);
export default CartState;
