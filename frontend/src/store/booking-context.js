import axios from "axios";
import React, { createContext, useState } from "react";

export const bookingContext = createContext({
  //bookingsTab: [],
  createBooking: () => {},
  getBookingById: () => {},
  oneBooking: {},
});

function BookingContextProvider(props) {
  //const url = "http://localhost:4000/"; //port backend
  //const [bkTab, setBkTab] = useState([]);
  const [oneBk, setoneBk] = useState({});
  const token = localStorage.getItem("login");
  const userId = localStorage.getItem("userId");
  const requestHeaders = { Authorization: token, userId };
  function createBooking(data, evid) {
    console.log("postBooking", data);
    console.log("evid", evid);
    axios
      .post(`http://localhost:4000/booking/newBooking/${evid}`, data, {
        headers: { ...requestHeaders },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("successfully created booking !");
        }
        return res;
      })
      .then((data) => {
        console.log("my data", data);
        setoneBk(data.data);
      })
      .catch((err) => {
        console.log("catch error", err);
        alert("erreur inconnue");
      });
    /*  fetch(`http://localhost:4000/booking/newBooking/${evid}`, {
      method: "POST",
      headers: {
        ...requestHeaders,
      },
      //!  body: data,
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("successfully created booking !");
        }
        return res;
      })
      .catch((err) => {
        console.log("catch error", err);
        alert("erreur inconnue");
      }); */
  }
  function getBookingById(bookid) {
    axios
      .get(`http://localhost:4000/booking/oneBooking/${bookid}`, {
        headers: { ...requestHeaders },
      })
      .then((res) => res.json())
      .then((data) => setoneBk(data))
      .catch((err) => console.log("catch error", err));
  }

  const context = {
    createBooking: createBooking,
    oneBooking: oneBk,
  };
  return (
    <bookingContext.Provider value={context}>
      {props.children}
    </bookingContext.Provider>
  );
}
export default BookingContextProvider;
