import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { eventContext } from "../../../store/event-context.js";
import BookingOrder from "./BookingOrder/BookingOrder.js";
import Payment from "./Payment";
import { SelectTicketsForm } from "./SelectTicketsForm";

// function PanierCard() {
export default function EventBooking() {
  const [hide, setHide] = useState(true);
  const [categoryPriceToPay, setCategoryPriceToPay] = useState([]);

  const paymentClick = () => {
    setHide((prev) => !prev);
  };

  const TotalToPay = categoryPriceToPay
    ? // ? categoryPriceToPay.map((c) => c[1]).reduce((a, b) => a + b, 0)
      categoryPriceToPay.map((c) => c.Amount).reduce((a, b) => a + b, 0)
    : 0;

  const eventCtx = useContext(eventContext);
  const params = useParams();

  //const [bookedEvent, setBookedEvent] = useState({});
  const bookedEvent = {};

  useEffect(() => {
    eventCtx.getEventById(params.id);
  }, []);

  return (
    <div
      className="container p-5 mt-3 mb-3 "
      style={{ fontFamily: '"Montserrat"' }}
    >
      {localStorage.getItem("userId") && localStorage.getItem("login") ? (
        <>
          <div className="mb-4">
            Book for: <h1>{eventCtx.singleEvent.Title}</h1>
          </div>
          <SelectTicketsForm
            paymentClick={paymentClick}
            categoryPriceToPay={categoryPriceToPay}
            setCategoryPriceToPay={setCategoryPriceToPay}
            bookedEvent={eventCtx.singleEvent}
          ></SelectTicketsForm>
          <div className="row  bg-white rounded " hidden={hide}>
            <Payment
              categoryPriceToPay={categoryPriceToPay}
              TotalToPay={TotalToPay}
              BookedEvent={eventCtx.singleEvent}
            ></Payment>
          </div>
        </>
      ) : (
        <div>
          <div
            className="text-bg-light p-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            ⛔️ <br></br>
            Only registred users can book tickets from this website
            <br></br>
            click on the button bellow to create your own account
          </div>
          <Link
            to="/signup"
            type="button"
            className="btn btn-dark"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Sign-in
          </Link>
        </div>
      )}
    </div>
  );
}

// export default PanierCard;
