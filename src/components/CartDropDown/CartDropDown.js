import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./CartDropDown.scss";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
