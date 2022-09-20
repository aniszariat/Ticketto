import React, { useContext, useEffect } from "react";
import { eventContext } from "../../store/event-context";
import EventCard from "./EventCard";
import View from "../Home/View";
import CallToaction from "../Home/CallToaction";

function EventHomeList() {
  const eventsCtx = useContext(eventContext);
  useEffect(() => {
    eventsCtx.getAllEvents();
  }, []);
  // console.log("eventsTab:", eventsCtx.eventsTab);

  return (
    <>
      <div className="container d-flex justify-content-center align-content-center pt-5 pb-5 ">
        <div className="row ">
          <div className="row">
            <div className="col section-title">
              <h2>Events</h2>
              <p>Upcoming Events</p>
            </div>
          </div>
          <View rendredIn="events"></View>
          {/* {eventsTab.map((event, index) => { */}
          {eventsCtx.eventsTab.slice(0, 3).map((event, index) => {
            return (
              <EventCard key={index} event={event} flex="true"></EventCard>
            );
          })}
        </div>
      </div>
      <CallToaction></CallToaction>
    </>
  );
}

export default EventHomeList;
