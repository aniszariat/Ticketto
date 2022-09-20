import React, { useEffect, useState, useCallback } from "react";
import AllEventsList from "./AllEventsList";
import AllEventSwitchingSlides from "./AllEventSwitchingSlides";

export function listToMatrix(list, elementsPerSubArray) {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

export default function AllEventsToRender({ eventsTab,checked }) {
  const eventsToSlice = listToMatrix(eventsTab, 6);
  // console.log('eventsToSlice', eventsToSlice)

  const [index, setIndex] = useState(0);
  const [eventsToRender, setEventsToRender] = useState(eventsToSlice[0]);
  const handleClick = (p) => {
    setIndex((current) =>
      !isNaN(p) ? p : p === "Next" ? current + 1 : current - 1
    );
    // console.log("index",p);
  };
  useEffect(() => {
    //console.log("index", index);
    setEventsToRender(eventsToSlice[index]);
  }, [index]);
  useEffect(() => {
    setEventsToRender(eventsToSlice[index]);
  }, [eventsToSlice?.length]);
  // useEffect(() => {
  //   console.log("eventsToRender",eventsToRender, eventsTab);
  // });

  return (
    <div className="col-lg-9 col-md-6 col-12">
      <AllEventsList eventsTab={eventsToRender} checked={checked}></AllEventsList>
      <AllEventSwitchingSlides
        handleClick={handleClick}
        eventsPages={eventsToSlice.length}
        currentind={index}
      ></AllEventSwitchingSlides>
    </div>
  );
}
