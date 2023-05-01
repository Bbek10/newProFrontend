import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";

import "./payment.css";
import { clearErrors, createOrder } from "../../actions/orderAction";

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const payBtn = useRef(null);
  const dispatch = useDispatch();
  const alert = useAlert();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const { error } = useSelector((state) => state.newOrder);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    // taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    payBtn.current.disabled = true;

    dispatch(createOrder(order));

    history.push("/success");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm">
          <Typography>
            You'll pay Rs.{orderInfo && orderInfo.totalPrice} at the time of
            delivery
          </Typography>
        </form>

        <input
          type="submit"
          value={` I will Pay - Rs.${orderInfo && orderInfo.totalPrice}`}
          ref={payBtn}
          onClick={(e) => onClickHandler(e)}
          className="paymentFormBtn"
        />
      </div>
    </Fragment>
  );
};

export default Payment;
