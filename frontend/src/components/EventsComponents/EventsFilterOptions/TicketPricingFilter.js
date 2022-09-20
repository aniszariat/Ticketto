import React from 'react'

export default function TicketPricingFilter() {
  return (
    <div className="row justify-content-around align-content-around d-flex">
        <div className="col-12 mt-5 mb-5">
          <label
            htmlFor="customRange2"
            className="form-label h4"
            style={{
              fontFamily: '"Quicksand"   !important',
              letterSpacing: "0.5px",
              fontWeight: 500,
            }}
          >
            Ticket Pricing
          </label>{" "}
          <hr className="w-75 text-secondary mt-2 mb-4" />
          <div className="mb-3 d-flex justify-content-center my-4">
            <span className=" mr-2 mt-1 font-weight-bolder text-muted align-middle">
              0
            </span>
            <input
              type="range"
              className="form-range "
              min={10}
              max={500}
              id="customRange2"
            />
            <span className=" ml-2 font-weight-bolder text-muted mt-1 align-middle">
              2000
            </span>
          </div>
        </div>
      </div>
  )
}
