'use client';
import { setAddItemToCart, setOpenCart } from '@/redux/CartSlice';
import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
interface SaleItem {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: StaticImageData;
  price: string;
  color: string;
  shadow: string;
}
interface SingleItem {
  item: SaleItem;
  ifExists: boolean;
}
const ItemCard: React.FC<SingleItem> = ({ item, ifExists }) => {
  // type ExcludeProps='color'|'shadow'|'btn'|'rating';
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(setAddItemToCart({ ...item, cartQuantity: 0 }));
  };
  const onCartToggle = () => {
    dispatch(setOpenCart());
  };
  return (
    <div
      className={`relative bg-gradient-to-b ${item.color} ${
        item.shadow
      } grid items-center ${
        ifExists ? 'justify-items-start my-2' : 'justify-items-center'
      } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={` grid items-center ${
          ifExists ? 'justify-items-start' : 'justify-items-center'
        } `}
      >
        <h1 className=" text-slate-200 lg:text-lg md:text-base font-medium filter drop-shadow">
          {item.title}
        </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {item.text}
        </p>
        <div className=" flex items-center justify-between w-28 my-2">
          <div className=" flex items-center bg-white/80 px-1 rounded blur-effect-theme">
            <h1 className=" text-black text-sm font-medium">{item.price}</h1>
          </div>
          <div className=" flex items-center gap-1">
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <h1 className=" md:text-sm font-normal text-slate-100">
              {item.rating}
            </h1>
          </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200  "
            onClick={onAddToCart}
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black "
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
          >
            {item.btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? 'absolute top-5 right-1' : 'justify-center'
        } `}
      >
        <Image
          src={item.img}
          alt={`img/item-img/${item.id}`}
          className={`transitions-theme hover:-rotate-12 ${
            ifExists
              ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]'
              : 'h-36 w-64 mt-6'
          }`}
          width={1000}
          height={1000}
        ></Image>
      </div>
    </div>
  );
};

export default ItemCard;
