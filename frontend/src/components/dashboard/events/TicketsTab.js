import React, { useState, useEffect } from "react";
import TicketCatRow from "./TicketCatRow";
const _ = require("lodash");
// export default function TicketsTab({ ticketsCat, ticketPacks, ticketsData }) {
export default function TicketsTab({
  ticketsCat,
  ticketPacks,
  setTicketsData,
  disabled,
  update,
}) {
  // console.log(ticketsCat); => 3 : Normal

  let range =
    ticketsCat?.split(":")[0] === 3
      ? ticketPacks
      : ticketPacks.slice(0, ticketsCat.split(":")[0]);
  //console.log('range',range);

  // const ticketsData = [];
  // range.map((element) =>
  //   ticketsData.push({ Category: element.slice(4), Quantity: 0, Price: 0 })
  // );
  //const [ticketDataTab, setTicketDataTab] = useState(ticketsData);
  const [ticketDataTab, setTicketDataTab] = useState([]);
  //console.log("ticketDataTab", ticketDataTab);

  function submitOneTicketCategoryHandler(
    category,
    quantity,
    price,
    validated
  ) {
    let ticketData = {
      Category: category,
      Quantity: quantity,
      Available: quantity,
      Price: price,
      Validated: validated,
    };
    console.log("td", ticketData);
    setTicketsData((prevState) => {
      let newState = [...prevState];
      let foundCategoryIndex = newState.findIndex(
        (el) => el?.Category === category
      );
      foundCategoryIndex === -1
        ? newState.push(ticketData)
        : (newState[foundCategoryIndex] = { ...ticketData });
      return newState;
    });
  }

  //console.log('Final ticketDataTab', ticketDataTab)

  return (
    <div className="table-responsive">
      <table
        id="example"
        style={{ width: "100%" }}
        className="table table-bordered"
      >
        <thead className="bg-light text-center">
          <tr>
            <th>Tickets Category</th>
            <th>Total Quantity</th>
            <th>Price $</th>
            <th>Check to validate</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {range.map((pack) => (
            <TicketCatRow
              update={update}
              key={pack.split(" : ")[0]}
              pack={pack}
              submitTicketHandler={submitOneTicketCategoryHandler}
              disabledcomp={disabled}
            ></TicketCatRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
