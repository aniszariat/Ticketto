import React from "react";
import FilterForm from "./FilterForm";
const _ = require("lodash");
const moment = require("moment"); // require
export default function AllEventsFilterOptions({ CategoryTab, eventsTab, checked }) {
  const CategoryFilterTab = _.map(CategoryTab, "CategoryEvent");
  const LocationFilterTab = [...new Set(_.map(eventsTab, "AdresseEvent"))];
  const DateFilterTab = {
    Today: moment().format(),
    "This week": moment().week(),
    "Next week": moment().week() + 1,
    ThisMonth: moment().month(),
    "Next Month": moment().month() + 1,
  };
  //const [checkedFilters, setcheckedFilters] = useState({"Event Category":[],"Event Location":[],"Event Period":[]});
  // const [checkedFilters, setcheckedFilters] = useState([]);
  //var checked = [];
  

  return (
    <div>
      
      <FilterForm
        FilterTab={CategoryFilterTab}
        FilterField={"Event Category"}
        checked={checked}
      ></FilterForm>
      <FilterForm
        FilterTab={LocationFilterTab}
        FilterField={"Event Location"}
        checked={checked}
      ></FilterForm>
      {/* 
      <TicketPricingFilter></TicketPricingFilter>
      */}
      <FilterForm
        FilterTab={Object.keys(DateFilterTab)}
        FilterField={"Event Period"}
        checked={checked}
      ></FilterForm>
    </div>
  );
}
