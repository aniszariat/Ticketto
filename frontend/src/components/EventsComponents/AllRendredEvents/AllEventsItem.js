import React from "react";
import Moment from "moment";

export default function AllEventsItem({ event }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card">
        <img
          style={{ height: 200 }}
          className="card-img-top img-fluid "
          src={event.PosterEvent}
          alt={event.Title + " Poster\n" + event.PosterEvent}
        />
        <div className="card-body  p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="h5 ">{event.Title} </h2>
            <a className="btn btn-light rounded-circle" href=" ">
              <i className="bi bi-bookmark-heart fs-5" />
            </a>
          </div>
          <p>
            <i className="fa fa-calendar me-2 text-muted" aria-hidden="true" />
            {Moment(event.DateEvent).format("dddd MMM Do YYYY")}
            <br />
            15:20Pm &amp; 11:00Am
          </p>
          <p className="text-justify">
            <i className="fa-solid fa-location-dot me-2 text-muted" />
            {event.AdresseEvent} <br />
            {event.CategoryEvent}
          </p>

          <div className="col-lg  btn-group" role="group">
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
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}
