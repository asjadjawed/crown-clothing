import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const princeInCents = price * 100;
  const publishableKey = "pk_test_wZmE6llKYA7ClnFNNmvUYmSq00IdwY8STf";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={princeInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
