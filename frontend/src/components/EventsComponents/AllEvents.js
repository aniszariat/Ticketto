import React, { useContext, useEffect, useState } from "react";
import { cayegoryContext } from "../../store/category-context";
import { eventContext } from "../../store/event-context";
import AllEventsToRender from "./AllRendredEvents/AllEventsToRender";
import AllEventsFilterOptions from "./EventsFilterOptions/AllEventsFilterOptions";
export default function AllEvents() {
  const eventsCtx = useContext(eventContext);
  const CategoryCtx = useContext(cayegoryContext);
  useEffect(() => {
    eventsCtx.getAllEvents();
    CategoryCtx.getAllCategories();
  }, []);
  var checked = [];
  const [check, setCheck] = useState([]);

  return (
    <div className="container shadow p-5 mt-5 mb-5">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          {" "}
          <button
            type="button"
            className="nav-link create mb-3 btn btn-outline-light p-1 text-muted"
            onClick={(e) => setCheck(checked)}
          >
            <i className="bi bi-filter  me-2" />
            Filter
          </button>
          <AllEventsFilterOptions
            CategoryTab={CategoryCtx.categoriesTab}
            eventsTab={eventsCtx.eventsTab}
            checked={checked}
          ></AllEventsFilterOptions>
        </div>
        <AllEventsToRender
          eventsTab={
            check.length
              ? eventsCtx.eventsTab.filter((event) =>
                  Object.values(event).some((value) => check.includes(value))
                )
              : eventsCtx.eventsTab
          }
          checked={check}
        ></AllEventsToRender>
      </div>
    </div>
  );
}
