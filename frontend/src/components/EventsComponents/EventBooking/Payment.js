import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookingContext } from "../../../store/booking-context";
import CreditCard from "./creditCard.PNG";
const moment = require("moment");
export default function Payment({
  categoryPriceToPay,
  TotalToPay,
  BookedEvent,
}) {
  const navigate = useNavigate();
  let params = useParams();
  const bookingCtx = useContext(bookingContext);
  categoryPriceToPay = categoryPriceToPay.filter((e) => e.Amount);

  var bookingData = {
    Customer: localStorage.getItem("userId"),
    TotalToPay: TotalToPay,
    BookedTickets: categoryPriceToPay, // JSON.stringify(categoryPriceToPay), //!categoryPriceToPay
    BookedEvent: BookedEvent._id,
  };

  const handleClick = () => {
    console.log("bookingData", bookingData);
    bookingCtx.createBooking(bookingData, params.id);

    setTimeout(() => {
      navigate(`/eventBooking/${params.id}/bookingOrder`);
    }, 750);
  };

  return (
    <div className="mt-3 container">
      <div className="row d-flex">
        <div className="col-3">
          <img src={CreditCard} alt="CreditCard"></img>
        </div>
        <div className="col-9">
          <form className="row g-3 ">
            <div className="row g-3">
              {/* <div className="col-lg col-12"> */}
              <div className="col-12">
                <input
                  type="Number"
                  className="form-control p-3"
                  placeholder="Card Number"
                  aria-label="Card Number"
                  name="CardNumber"
                  required
                />
              </div>
              <div className="row g-3">
                <div className="btn-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="expiry year"
                  >
                    <option hidden>expiry month</option>
                    {Array.from({ length: 12 }, (v, k) => k + 1).map(
                      (month, index) => (
                        <option value={month} key={index}>
                          {moment(`"2022-${month}"`, "YYYY-MM").format("MMMM")}
                        </option>
                      )
                    )}
                  </select>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="expiry year"
                  >
                    <option hidden>expiry year</option>
                    {[...Array(5).keys()].map((year, index) => (
                      <option value={year} key={index}>
                        {2022 + year}
                      </option>
                    ))}
                  </select>
                  {/* <input
                    type="text"
                    className="form-control p-3"
                    id="inputEmail4"
                    aria-label="Expiry"
                    placeholder="Expiry"
                    name="Expiry"
                    required
                  /> */}
                </div>
                <div className="col-md-6  mb-3 col-12 ">
                  <input
                    type="password"
                    className="form-control p-3"
                    id="inputPassword4"
                    placeholder="CVC"
                    name="CVC"
                    required
                  />
                </div>
              </div>

              <div className="mt-3 btn-group ">
                <button
                  onClick={handleClick}
                  type="button"
                  className="btn btn-dark rounded-1   mb-2 p-2 me-2   org"
                >
                  confirm payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
