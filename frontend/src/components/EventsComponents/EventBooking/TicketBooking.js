import React, { useEffect, useState } from "react";
const _ = require("lodash");
export default function TicketBooking({
  ticket,
  categoryPriceToPay,
  setCategoryPriceToPay,
  bookedEvent,
}) {
  const [count, setCount] = useState(0);
  function plusClick() {
    setCount(count + 1);
  }
  function minusClick() {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  }

  useEffect(() => {
    // console.table(bookedEvent);
    // console.log(ticket.Category, " : ", ind);
    // console.log("count ==", count);
    setCategoryPriceToPay(() => {
      let catId = bookedEvent.EventTickets.find(
        (t) => t.Category == ticket.Category
      )._id;
      //let newCat = [ticket.Category, count * ticket.Price, count, catId];
      let newCa = {
        Category: ticket.Category,
        Amount: count * ticket.Price,
        Quantity: count,
        CatId: catId,
      };
      categoryPriceToPay.map((c, index) => {
        //if (c[0] == ticket.Category) {
        if (c.Category == ticket.Category) {
          _.pullAt(categoryPriceToPay, [index]);
        }
      });

      return [...categoryPriceToPay, newCa];
    });
  }, [count]);

  return (
    <tr>
      <td>{ticket.Category}</td>
      <td>
        <div className="number">
          <div className="btn-group">
            <button
              type="button"
              onClick={minusClick}
              className="btn btn-outline-secondary rounded-circle  me-1"
              disabled={!count}
            >
              <span className="minus">-</span>
            </button>

            <h3>
              <span
                className={
                  count ? "badge bg-success me-2" : "badge bg-danger me-2"
                }
              >
                {count}
              </span>
            </h3>
            <button
              type="button"
              onClick={plusClick}
              className="btn btn-outline-secondary rounded-circle  me-1 "
              disabled={count == 50}
            >
              <span className="plus fw-3">+</span>
            </button>
          </div>
        </div>
      </td>
      <td>{ticket.Price}</td>
      <td>
        <div className="btn-group">
          <p>{count * ticket.Price}</p> &ensp;
          <strong>Dt</strong>
        </div>
      </td>
    </tr>
  );
}
