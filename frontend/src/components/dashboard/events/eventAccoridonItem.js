import React from "react";
import BarChart from "./BarChart";
var converter = require("number-to-words");
export default function EventAccoridonItem({ event, index }) {
  const str =
    converter
      .toWords(index + 1)
      .charAt(0)
      .toUpperCase() + converter.toWords(index + 1).slice(1);
  //   console.log("str", str);
  //   console.log("heading" + str);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"heading" + str}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + str}
          aria-expanded="true"
          aria-controls={"collapse" + str}
        >
          {event.Title}
        </button>
      </h2>
      <div
        id={"collapse" + str}
        className="accordion-collapse collapse hide"
        aria-labelledby={"heading" + str}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <BarChart event={event}></BarChart>
        </div>
      </div>
    </div>
  );
}
