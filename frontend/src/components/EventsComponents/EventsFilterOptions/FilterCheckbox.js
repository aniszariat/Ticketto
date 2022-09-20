import React, { useState } from "react";

export default function FilterCheckbox({ filterValue, handleCheck }) {
  const [isChecked, setIsChecked] = useState(true);

  // const handleChange = async (e) => {
  //   e.preventDefault()
  //   await setIsChecked((prev) => !prev);
  //   console.log("isChecked", isChecked);
  //   //handleCheck.bind(null, [filterValue, isChecked]);
  //   handleCheck.bind(null, filterValue);
  // }

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={filterValue}
        //onChange={handleChange}
        onChange={async(e) => {
          // handleCheck.bind(null, filterValue);
         await setIsChecked((prev) => !prev);
          console.log("isChecked", isChecked);
          // handleCheck(filterValue);
          handleCheck(filterValue,isChecked);
        }}
      />
      <label className="form-check-label">{filterValue}</label>
    </div>
  );
}
