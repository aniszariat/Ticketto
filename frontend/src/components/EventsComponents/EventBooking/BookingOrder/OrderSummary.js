import React from "react";

export default function OrderSummary({ booking }) {
  //location.reload();
  console.log("booking", booking);
  return (
    <div className="col-lg-6" style={{ fontFamily: '"Montserrat"' }}>
      <div className="bg-light  px-4 py-3 text-uppercase font-weight-bold">
        Order summary{" "}
      </div>
      <div className="p-4">
        <p className="font-italic mb-4">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>
        <ul className="list-unstyled mb-4">
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Order Subtotal </strong>
            <strong>
              {" "}
              <i className="fa fa-euro" aria-hidden="true" />{" "}
              {booking.TotalToPay}
            </strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Shipping and handling</strong>
            <strong>
              <i className="fa fa-euro" aria-hidden="true" /> 2.5
            </strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Tax (1.5%)</strong>
            <strong>
              {" "}
              <i className="fa fa-euro" aria-hidden="true" />{" "}
              {(0.015 * booking.TotalToPay).toFixed(2)}
            </strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Total</strong>
            <h5 className="font-weight-bold">
              <i className="fa fa-euro" aria-hidden="true" />{" "}
              {booking.TotalToPay + booking.TotalToPay * 0.015 + 2.5}
            </h5>
          </li>
        </ul>
        <a
          href="/"
          className="btn btn-dark py-2   text-center rounded-1 BookT btn-block"
        >
          Procceed to checkout
        </a>
      </div>
    </div>
  );
}
