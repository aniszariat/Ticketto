import React from "react";
import Moment from "moment";
import { Link } from "react-router-dom";

function EventCard({ event, flex }) {
  return (
    <div className={flex ? "col-12 col-lg-4 col-md-6 gy-3" : "col-12"}>
      {event ? (
        <div className="card">
          <img
            style={{ height: 300 }}
            className="card-img-top img-fluid "
            src={event.PosterEvent}
            alt="Card cap"
          />
          <div className="card-body p-3">
            <div className="col d-flex justify-content-between align-content-between">
              <h2 className="h5 ">{event.Title} </h2>
              <a className="btn btn-light rounded-circle" href="#">
                <i className="bi bi-bookmark-heart fs-4" />
              </a>
            </div>
            <p className="mb-3">
              <i
                className="fa fa-calendar me-2 text-muted"
                aria-hidden="true"
              />

              {Moment(event.DateEvent).format("dddd MMM Do YYYY")}
              <br />
            </p>
            <p>{event.Description}</p>
            <p className="mb-3">
              <i className="fa-solid fa-location-dot  me-2 text-muted" />
              {event.AdresseEvent}
            </p>
            <div className="col-lg btn-group" role="group">
              <a
                href={"/eventBooking/" + event._id}
                className="btn btn-dark  text-white rounded-1 me-2"
              >
                Book Now <i className="bi bi-ticket-perforated"></i>
              </a>

              <a
                href={`/eventDetails/${event._id}`}
                className="btn btn-light border-secondary rounded-1 "
              >
                View Details <i className="bi bi-eye " />
              </a>
            </div>
          </div>
          <div className="card-subtitle p-3">
            <small className="text-muted">{event.created_at}</small>
          </div>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>No evnt to display</h1>
      )}
    </div>
  );
}

export default EventCard;
