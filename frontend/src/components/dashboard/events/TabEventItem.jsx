import { update } from "lodash";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventContext } from "../../../store/event-context";
import { userContext } from "../../../store/user-context";
import { afterDeleting } from "./AfterDeleting";
import { confirm } from "./DeleteConfiramtion";

function TabEventItem({ eventItems, keys, handleDelete, isAdmin }) {
  const eventCtx = useContext(eventContext);
  async function handleOnClick(title) {
    console.log("hoge!");
    if (await confirm("Are your sure?", eventItems)) {
      eventCtx.deleteEventById(eventItems._id);
      afterDeleting("this event is definitely deleted");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  const userCtx = useContext(userContext);
  const [eventCreator, setEventCreator] = useState({});

  useEffect(() => {
    if (eventItems.EventCreator) {
      userCtx.getUserByID(eventItems.EventCreator);
    }
  }, [eventItems.EventCreator]);
  // console.table(eventItems.EventTickets);
  return (
    <tr>
      <td>{keys + 1}</td>
      {isAdmin ? (
        <td>
          {eventItems.EventCreator
            ? eventItems.EventCreator
            : "NO creator found for this event"}
        </td>
      ) : null}
      <td>{eventItems.Title}</td>
      <td>{eventItems.CategoryEvent}</td>
      <td>
        {moment(eventItems.DateEvent).format("DD/MM/YYYY")} <br />{" "}
        {eventItems.Duration} hours
      </td>
      <td>{eventItems.AdresseEvent}</td>
      <td>
        <div>
          <ul className="navbar-nav">
            {eventItems.EventTickets.length
              ? eventItems.EventTickets.map((ticket, index) => (
                  <li className="nav-item" key={index}>
                    {" "}
                    {ticket.Category}{" "}
                  </li>
                ))
              : "No tickets for this event !"}
          </ul>
          {/* <Link to="/react-chartjs-2" className="btn btn-secondary">
            Booking details
          </Link> */}
        </div>
      </td>

      <td className="btn-group gx-3">
        <Link
          className="rounded-circle  ms-2 btn btn-outline-warning bg-light fs-5 border-0"
          to={`/eventDetails/${eventItems._id}`}
        >
          <i className="bi bi-eye" aria-hidden="true" />
        </Link>
        <Link
          className="rounded-circle  ms-2 btn btn-outline-success bg-light fs-5 border-0"
          to={`/eventEditDetails/${eventItems._id}`}
        >
          <i className="bi bi-pencil" aria-hidden="true" />
        </Link>
        {/* {isAdmin ? null : (
        )} */}
        <button
          className="rounded-circle  ms-2 btn btn-outline-danger bg-light  fs-5 border-0"
          type="button"
          onClick={(e) => handleOnClick(eventItems.Title)}
        >
          <i className="bi bi-trash" aria-hidden="true" />
        </button>

        {/* <button onClick={(e) => handleOnClick(eventItems.Title)}>simple</button> */}
      </td>
    </tr>
  );
}

export default TabEventItem;
