import React from "react";

export default function AddTickets() {
  return (
    <section id="createTicket" className="container">
      {/*title start*/}
      <div className="row ">
        <div className="section-title">
          <h2>Tickets</h2>
          <p>Create Ticket</p>
        </div>
      </div>
      {/*title end*/}
      {/*ticket form start*/}
      <form className="row g-3 mb-5 needs-validation">
        <div className="col-md-4">
          <label htmlFor="validationCustom05" className="form-label">
            Ticket Reference
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid reference
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Ticket Price
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom01"
            defaultValue="Shaun lee moon"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Ticket Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom02"
            defaultValue="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Ticket Category
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value className="bg-light">
              Choose...
            </option>
            <option>Normal</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Event Reference
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value className="bg-light">
              Choose...
            </option>
            <option>AB8879</option>
           
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-dark btnDash rounded-1" type="submit">
            Submit Ticket
          </button>
          <a
            className="rounded-circle  ms-2 btn btn-outline-light text-dark border-0"
            type="submit"
          >
            <i className="bi bi-trash" aria-hidden="true" />
          </a>
        </div>
      </form>
      {/*ticket form end*/}
    </section>
  );
}
