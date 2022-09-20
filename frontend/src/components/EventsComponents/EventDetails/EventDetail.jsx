import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { eventContext } from "../../../store/event-context";
import EventDescription from "./EventDescription";
import TicketItem from "./TicketItem";
import VideoBox from "./VideoBox";
import "./eventDetailsStyle.css";
import { getEventById } from "../../../service/eventAPI";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import PreviousButton from "../../dashboard/events/PreviousButton";

function EventDetail() {
  let params = useParams();

  // console.log("_id", params.id);
  let eventCtx = useContext(eventContext);
  const [selectedEvent, setselectedEvent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getEventById(params.id).then((res) => {
        setselectedEvent(res.data);
      });
    }, 750);
  }, []);

  // console.log("selectedEvent", selectedEvent);

  return (
    <>
      {selectedEvent ? (
        <div className="container mb-5 pt-5 pb-5">
          <EventDescription event={selectedEvent}></EventDescription>
          <PreviousButton path={"/listEvent"}></PreviousButton>
          <VideoBox event={selectedEvent}></VideoBox>
          {/*Category Ticket Start*/}
          <section id="categoryTicket">
            <div className="row mb-5">
              <div className="col section-title">
                <h2>Event Ticketing</h2>
              </div>
            </div>
            {selectedEvent.EventTickets.length ? (
              <TicketItem
                selectedEvent={selectedEvent}
                //ticket={ticket}
              ></TicketItem>
            ) : (
              "no tickets for this event"
            )}
          </section>
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
    </>
  );
}

export default EventDetail;
