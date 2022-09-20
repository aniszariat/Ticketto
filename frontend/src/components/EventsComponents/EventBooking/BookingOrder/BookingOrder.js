import React, { useContext, useEffect } from "react";
import Panier from "./Panier";
import Coupon from "./Coupon";
import OrderSummary from "./OrderSummary";
import { bookingContext } from "../../../../store/booking-context";
import LoadingSpinner from "../../../Spinner/LoadingSpinner";

export default function BookingOrder() {
  const bookingCtx = useContext(bookingContext);
  useEffect(() => {
    console.log("one booking", bookingCtx.oneBooking);
  }, [bookingCtx.oneBooking]);

  return (
    <>
      {bookingCtx.oneBooking.booking == {} ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div
          className="container p-5 mt-3 mb-3 "
          style={{ fontFamily: '"Montserrat"' }}
        >
          <Panier booking={bookingCtx.oneBooking.booking}></Panier>
          <div className="row  bg-white rounded ">
            <Coupon></Coupon>
            <OrderSummary
              booking={bookingCtx.oneBooking.booking}
            ></OrderSummary>
          </div>
        </div>
      )}
    </>
  );
}
