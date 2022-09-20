import React, { useEffect, useState } from "react";
import FilterCheckbox from "./FilterCheckbox";
const _ = require("lodash");
function FilterForm({ FilterTab, FilterField, checked }) {
  // const [isChecked, setIsChecked] = useState(false);

  //const handleCheck = (tab) => {
  const handleCheck = (value,isChecked) => {
    // await setIsChecked((prev) => !prev);
    if (isChecked) {
      // checked.push(tab[0]);
      checked.push(value);
    }
    else{
      //checked =  _.remove(checked, (filter) => filter ===value);
      _.remove(checked, (filter) => filter ===value);
    }
    console.log("checked", checked);
  };

  return (
    <div className="row justify-content-around align-content-around d-flex">
      <div className="col-12 mb-5">
        <h4
          style={{
            fontFamily: '"Quicksand"   !important',
            letterSpacing: "0.5px",
            fontWeight: 500,
          }}
        >
          {FilterField}
        </h4>
        <hr className="w-75 text-secondary " />
        <div className="form-check ">
          <input className="form-check-input" type="checkbox" defaultChecked />
          <label className="form-check-label">All</label>
        </div>
        {FilterTab.map((element) => {
          return (
            <FilterCheckbox
              handleCheck={handleCheck}
              filterValue={element}
              key={FilterTab.indexOf(element)}
            ></FilterCheckbox>
          );
        })}
      </div>
    </div>
  );
}

export default FilterForm;
