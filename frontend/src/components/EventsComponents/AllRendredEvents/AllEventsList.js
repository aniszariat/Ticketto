import React from "react";
import AllEventsItem from "./AllEventsItem";

export default function AllEventsList({ eventsTab, checked }) {
  //console.table(eventsTab);

  return (
    <div>
      <div className="row ">
        <div className="col d-flex justify-content-between align-content-between align-middle mb-3 ">
          {/* <p className="text-muted  fs-6"> {checked.length? `<strong><em>${checked.join(', ')}</em></strong>`:  'Lorem, ipsum dolor'}</p> */}
          <p className="text-muted  fs-6">
            {" "}
            {checked.length ? (
              <strong>
                <em>{checked.join(", ")}</em>
              </strong>
            ) : (
              "Lorem, ipsum dolor"
            )}
          </p>

          <div className="mb-3">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option className="text-muted" defaultValue>
                  Date
                </option>
                <option value={1} className=" text-muted">
                  Lowest Price
                </option>
                <option value={2} className=" text-muted">
                  Highest Price
                </option>
              </select>
              <label htmlFor="floatingSelect" className="text-muted">
                Sort By
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-3">
        {eventsTab?.map((event, index) => {
          return <AllEventsItem key={index} event={event}></AllEventsItem>;
        })}
      </div>
    </div>
  );
}
