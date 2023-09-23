import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const CartCount = () => {
  return (
    <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
      <div className="flex items-center gap-3">
        <div className="grid items-center cursor-pointer">
          <ChevronDoubleLeftIcon className="icon-style text-slate-900 w-5 h-5 hover:text-orange-500 stroke-[2]" />
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-base font-medium text-slate-900 ">Your Cart</h1>
          <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">
            (Items)
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className=" rounded-none bg-theme-cart active:scale-90 p-0.5 "
        >
          <XMarkIcon className="icon-style w-5 h-5 stroke-[2] text-slate-100" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
