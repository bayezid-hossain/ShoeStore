import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';
import toast, { Toast } from 'react-hot-toast';
interface CartItem {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: StaticImageData;
  price: string;
  color: string;
  shadow: string;
  cartQuantity: number;
}

interface CartState {
  cartState: boolean;
  cartItems: CartItem[];
}
let cartDataFromLocalStorage;
if (typeof window !== 'undefined') {
  cartDataFromLocalStorage = localStorage.getItem('cart');
}
const initialState: CartState = {
  cartState: false,
  cartItems: cartDataFromLocalStorage
    ? JSON.parse(cartDataFromLocalStorage)
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state) => {
      state.cartState = true;
    },
    setCloseCart: (state) => {
      state.cartState = false;
    },
    setAddItemToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} Quantity increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      try {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      } catch (e) {}
    },
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart } =
  CartSlice.actions;

export const selectCartState = (state: { cart: CartState }) =>
  state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export default CartSlice.reducer;
