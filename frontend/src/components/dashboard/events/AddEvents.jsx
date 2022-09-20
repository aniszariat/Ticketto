import React from "react";
import AddEventForm from "./AddEventForm";
export default function AddEvents({ update }) {
  return (
    <section id="createEvent" className="container">
      <div className="row">
        <div className="section-title">
          <h2>Events</h2>
          <p>{update ? "Update" : "Create"} Event</p>
        </div>
      </div>
      <AddEventForm update={!!update}></AddEventForm>
    </section>
  );
}
