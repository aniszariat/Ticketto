import React, { useEffect, useState } from "react";
const moment = require("moment");
function TicketItem({ selectedEvent }) {
  const [sEvent, setSEvent] = useState({});
  useEffect(() => {
    setSEvent(selectedEvent);
    // console.log("selectedEvent", selectedEvent);
  }, []);

  return (
    <div>
      {selectedEvent.EventTickets.map((ticket, index) => (
        <div className="row pb-5 align-middle " key={index}>
          <div className="col-lg-4 col-12">
            <p className="event">
              {" "}
              Exposition d'art moderne{" "}
              <i
                className="fa fa-heart ms-3 rounded-circle bg-light text-danger fs-5 p-3 "
                aria-hidden="true"
              />
            </p>
            <h2 className="title">{selectedEvent.CategoryEvent}</h2>
            <p>
              <i
                className="fa fa-calendar me-2 text-muted"
                aria-hidden="true"
              />
              Monday 15th 2022 <br /> 15:20Pm &amp; 11:00Am
            </p>
            <p>
              <i className="fa-solid fa-location-dot me-2 text-muted" />
              North,Soth, United State <br /> Party Number 16,20
            </p>
          </div>
          <div className="col-4">
            <div className="col-6 d-flex justify-content-start align-content-start  align-items-end">
              <h2 className="display-1 " style={{ fontWeight: 400 }}>
                {moment(selectedEvent.DateEvent).format("DD")}
              </h2>
              <p className="fs-4 lead">
                {moment(selectedEvent.DateEvent).format("MMM")}
              </p>
            </div>
            <h1 className="display-6">{selectedEvent.Title}</h1>
          </div>
          <div className="col-4">
            <div className="col-6 d-flex justify-content-center align-content-center align-items-center align-middle">
              <p className="lead text-muted mx-3">{ticket.Category} pack</p>
              <h2 className="display-4 mt-3" style={{ fontWeight: 500 }}>
                {ticket.Price}
              </h2>
              <p className=" fs-4 fa  lead">Dt</p>
              {/* <p className=" fs-4 fa fa-euro lead" /> */}
            </div>

            <a
              href={"/eventBooking/" + selectedEvent._id}
              className=" btn btn-outline-dark  BookT bg-dark pt-4 pb-4 text-white  fs-4"
            >
              {" "}
              <i
                className="fa fa-ticket fs-4 me-2 align-middle"
                aria-hidden="true"
              />{" "}
              Book a Ticket{" "}
            </a>
          </div>
          <hr className="text-muted" />
        </div>
      ))}
    </div>
  );
}

export default TicketItem;
