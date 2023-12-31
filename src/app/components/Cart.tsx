'use client';

import React, { useEffect } from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQuantity,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '@/redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQuantity);

  // console.log(cartItems.length);

  useEffect(() => {
    dispatch(setGetTotals({}));
    console.log('called');
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart());
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems({}));
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
          <CartCount
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
            count={totalQuantity}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div className="my-16">
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => {
                  //   console.log(item);
                  return <CartItem key={i} item={item} />;
                })}
              </div>
              <div className=" fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className=" flex items-center justify-between">
                  <h1 className="text-base font-semibold">SubTotal</h1>

                  <h1 className=" text-sm rounded bg-theme-cart text-slate-100 px-1.5 py-0.5 ">
                    ${totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className=" text-sm font-medium text-center">
                    Taxes and Shipping will be calculated at Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
