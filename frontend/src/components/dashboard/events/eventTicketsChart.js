import React, { useEffect, useState } from "react";
import { getEvents } from "../../../service/eventAPI";
import EventAccoridonItem from "./eventAccoridonItem";
import PreviousButton from "./PreviousButton";

export function EventTicketsChart() {
  const [events, setevents] = useState([]);
  useEffect(() => {
    getEvents().then((res) => {
      setevents(res?.data);
    });
  }, []);
  const userId = localStorage.getItem("userId");
  const isAdmin = userId == localStorage.getItem("admin");

  return (
    <div>
      <PreviousButton path={"/listEvent"}></PreviousButton>
      <div className="accordion" id="accordionExample">
        {isAdmin
          ? events?.map((event, index) => (
              <EventAccoridonItem
                key={event._id}
                event={event}
                index={index}
              ></EventAccoridonItem>
            ))
          : events
              ?.filter((event) => event.EventCreator.includes(userId))
              .map((event, index) => (
                <EventAccoridonItem
                  key={event._id}
                  event={event}
                  index={index}
                ></EventAccoridonItem>
              ))}
      </div>
    </div>
  );
}
