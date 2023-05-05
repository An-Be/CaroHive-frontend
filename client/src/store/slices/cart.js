import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";
import coupons from "../../coupons";

const initialState = {
  products: products,
  totalAmount: 0,
  totalCount: 0,
  couponUsed: ''
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCardTotal: (state) => {
      const { totalAmount, totalCount } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    changeAmount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, amount: Number(action.payload.value) };
        }
        return product;
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
    clearCart: (state) => {
      state.products = [];
    },
    applyCoupon: (state, action) => {
      if(state.couponUsed !== action.payload.coupon){
        Object.keys(coupons).map((coupon) => {
            if (coupon == action.payload.coupon) {
                state.couponUsed = action.payload.coupon
              return (state.totalAmount *= coupons[coupon]);
            }
          });
      }  
    },
  },
});

export const {
  getCardTotal,
  changeAmount,
  removeProduct,
  clearCart,
  applyCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;