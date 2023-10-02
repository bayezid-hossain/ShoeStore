'use client';

import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import {
  selectCartItems,
  selectCartState,
  setCloseCart,
} from '@/redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems.length);
  const onCartToggle = () => {
    dispatch(setCloseCart());
  };
  return (
    <div>
      <div
        className={`fixed top-0 left-0 bottom-0  blur-effect-theme w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? 'translate-x-0 transition-all duration-500 visible'
            : 'transition-all duration-500 invisible translate-x-[100%]'
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle} />
          {cartItems?.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="my-16">
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden">
                {cartItems?.map((item, i) => {
                  //   console.log(item);
                  return <CartItem key={i} item={item} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
