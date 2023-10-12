import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

interface CartCountProps {
  onCartToggle: () => void;
  onClearCartItems: () => void;
  count: number;
}

const CartCount: React.FC<CartCountProps> = ({
  onCartToggle,
  onClearCartItems,
  count,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-white h-11 flex items-center justify-between px-3 absolute top-0 left-0 right-0 w-full">
      <div className="flex items-center gap-3">
        {/* <div
          className="grid items-center cursor-pointer"
          onClick={onCartToggle}
        >
          <ChevronDoubleLeftIcon className="icon-style text-slate-900 w-5 h-5 hover:text-orange-500 stroke-[2]" />
        </div> */}
        <div className="flex gap-3 items-center">
          <h1 className="text-base font-medium text-slate-900 ">Your Cart</h1>
          <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">
            ({count} Items)
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className=" text-center font-medium px-1.5"
          onClick={() => setVisible(true)}
        >
          Clear Cart
        </button>
        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          className="w-[30vw] sm:w-[45vw] xsm:w-[60vw] xsm:text-sm sm:text-base xl:text-sm bg-white-700/60 rounded-lg h-[20vh] flex items-center justify-between blur-effect-theme"
          header="Confirm Action"
          headerClassName="flex flex-row justify-between items-center w-full mx-8 px-6 py-2 bg-black/80 text-white rounded-t-lg odd:text-sm"
          closeOnEscape
          dismissableMask
          contentClassName="flex flex-col justify-center items-center w-full text-center text-black border-2 border-t-0 border-black/50 rounded-b-lg sm:text-sm"
        >
          <p>Are you sure you want to Clear your cart?</p>
          <div className="flex justify-around items-center w-full mt-6">
            <button
              className="bg-green-500 p-2 px-4 font-semibold rounded-lg"
              onClick={() => setVisible(false)}
            >
              No
            </button>
            <button
              className="bg-red-700 font-semibold p-2 px-4 rounded-lg text-white"
              onClick={() => {
                onClearCartItems();
                setVisible(false);
              }}
            >
              Yes
            </button>
          </div>
        </Dialog>

        <button
          type="button"
          className=" rounded-none bg-theme-cart active:scale-90 p-0.5 "
          onClick={onCartToggle}
        >
          <XMarkIcon className="icon-style w-5 h-5 stroke-[2] text-slate-100" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
