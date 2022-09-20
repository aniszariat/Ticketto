import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import TicketBooking from "./TicketBooking";

function DisabledTicketsForm({ ticketsDisabled, children }) {
  const disabledStyle = {
    opacity: 0.5,
    pointerEvents: "none",
  };

  return (
    <div
      style={ticketsDisabled ? disabledStyle : {}}
      disabled={!!ticketsDisabled}
    >
      {children}
    </div>
  );
}

export function SelectTicketsForm({
  paymentClick,
  categoryPriceToPay,
  setCategoryPriceToPay,
  bookedEvent,
}) {
  const paymentButtonDiasbled = categoryPriceToPay
    ? // ? categoryPriceToPay.map((c) => c[0]).reduce((a, b) => a + b, 0)
      categoryPriceToPay.map((c) => c.Amount).reduce((a, b) => a + b, 0)
    : 0;

  const [ticketsDisabled, setticketsDisabled] = useState(false);

  const handleClick = () => {
    paymentClick();
    setticketsDisabled((prev) => !prev);
  };

  return (
    <>
      <DisabledTicketsForm ticketsDisabled={ticketsDisabled}>
        {bookedEvent.EventTickets ? (
          <div className="table-responsive">
            <table
              id="example"
              style={{ width: "100%" }}
              className="table table-bordered"
            >
              <thead className="bg-light text-center table-light ">
                <tr>
                  <th>Ticket Category</th>
                  <th> Quantity</th>
                  <th>Price $</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {bookedEvent.EventTickets.map((ticket, index) => (
                  <TicketBooking
                    key={ticket._id}
                    ticket={ticket}
                    bookedEvent={bookedEvent}
                    categoryPriceToPay={categoryPriceToPay}
                    setCategoryPriceToPay={setCategoryPriceToPay}
                  ></TicketBooking>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div
            style={{
              //border: "5px solid #FFFF00",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LoadingSpinner></LoadingSpinner>
          </div>
        )}
      </DisabledTicketsForm>
      <button
        type="button"
        className="btn btn-dark"
        disabled={!paymentButtonDiasbled}
        onClick={(e) => handleClick()}
      >
        {paymentButtonDiasbled
          ? ticketsDisabled
            ? "back to tickets Table"
            : "Go To Payment"
          : "Select Tickets Please"}
      </button>
    </>
  );
}
