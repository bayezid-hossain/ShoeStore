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
  cartTotalAmount: number;
  cartTotalQuantity: number;
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
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
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
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Removed from Cart`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} Quantity increased`);
      }
      try {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      } catch (e) {}
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      console.log(itemIndex);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`${action.payload.title} Quantity decreased`);
      }
      try {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      } catch (e) {}
    },
    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      try {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      } catch (e) {}
    },
    setGetTotals: (state, action) => {
      console.log('helll');
      let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = Number(price) * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQuantity += cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );
      console.log(totalAmount);
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
      console.log(totalAmount);
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setClearCartItems,
  setDecreaseItemQTY,
  setGetTotals,
} = CartSlice.actions;

export const selectCartState = (state: { cart: CartState }) =>
  state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;
export default CartSlice.reducer;
