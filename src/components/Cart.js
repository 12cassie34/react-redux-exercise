import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleShowCart } from '../store/cart-slice'

import "./Cart.css";

const Cart = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch()
  const showOrHideCart = () => {
    dispatch(toggleShowCart())
  }

  return (
    <div onClick={showOrHideCart} className="cartIcon">
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
