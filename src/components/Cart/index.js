import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../store/slices/cart";
import "./Cart.scss";
import {
  changeAmount,
  removeProduct,
  clearCart,
} from "../../store/slices/cart";
import { Link } from "react-router-dom";
import Product from "./components/Product/Product";
import OrderSummary from "./components/OrderSummary/OrderSummary";

export const Cart = () => {
  const { products, totalAmountWithoutCoupon } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [products]);

  const handleAMountChange = (value, id) => {
    dispatch(changeAmount({ value, id }));
  };
  const handleProductRemoval = (id) => {
    dispatch(removeProduct({ id }));
  };
  return (
    <div className="Cart">
      <div className="Cart__yourItems">
        <h1 className="Cart__yourItems__header text-xl font-bold">Your Cart</h1>
        {products.length > 0 ? (
          <>
            {" "}
            <Link
              className="Cart__yourItems__notReady link link-hover"
              to="/shop/women"
            >
              Not ready to checkout? Continue Shopping
            </Link>
            <div className="Cart__yourItems__products">
              {products.map((product, index) => (
                <Product
                  key={index}
                  id={product.id}
                  image={product.url}
                  handleProductRemoval={handleProductRemoval}
                  handleAMountChange={handleAMountChange}
                  index={index}
                  title={product.title}
                  price={product.price}
                  amount={product.amount}
                />
              ))}
              <button
                onClick={() => dispatch(clearCart())}
                className="btn btn-primary self-center Cart__yourItems__products__clear"
              >
                Clear Cart
              </button>
            </div>
          </>
        ) : (
          <Link className="link link-hover" to="/shop/women">
            There is nothing in your cart! Head to our Shop page
          </Link>
        )}
      </div>
      <OrderSummary products={products} totalAmountWithoutCoupon={totalAmountWithoutCoupon} />
    </div>
  );
};
