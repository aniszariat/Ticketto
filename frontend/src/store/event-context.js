import React, { createContext, useState } from "react";

export const eventContext = createContext({
  eventsTab: [],
  createEvent: () => {},
  getAllEvents: () => {},
  getEventById: () => {},
  deleteEventById: () => {},
  updateEventById: () => {},
  singleEvent: {},
});

function EventContextProvider(props) {
  const [evTab, setEvTab] = useState([]);
  const [singleEvent, setSingleEvent] = useState({});
  const token = localStorage.getItem("login");
  const userId = localStorage.getItem("userId");
  const requestHeaders = { Authorization: token, userId };
  function getAllEvents() {
    fetch("/events", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setEvTab(data));
  }

  function getEventById(id) {
    console.log("id cxt", id);
    fetch(`/events/${id}`, {
      method: "GET",
      // body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setSingleEvent(data))
      .catch((err) => console.log("catch error", err));
    //return evTab.find((e)=>e._id.includes(id) )
  }

  function deleteEventById(id) {
    console.log("recieved id", id);
    fetch(`/events/delete/${id}`, {
      method: "DELETE",
      headers: { ...requestHeaders },
      //      body: JSON.stringify(),
    })
      .then((res) => {
        res.json();
        console.log("res", res);
        //alert("are you sure ?");
      })
      .catch((err) => {
        console.log("erreur inconnue");
        // alert("erreur inconnue");
      });
    getAllEvents();
  }
  function updateEventById(id, data) {
    console.log("updateEvent", id);
    fetch(`/events/update/${id}`, {
      method: "PUT",
      headers: { ...requestHeaders },
      body: data,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("successfully updated event !");
        }
        if (res.status === 400) {
          alert("Failed to update the event");
        }
        return res;
      })
      .catch((err) => {
        console.log("catch error", err);
        // alert("erreur inconnue");
      });
  }

  /* function getEventById(id) {
   return fetch(`/events/${id}`, {
      method: "GET",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
    // console.log("id cxt",id);
      // .then((res) =>{res.json()
      // })
      // .catch((err) => console.log("catch error", err));
      // return evTab.find((e)=>e._id.includes(id) )
    } */

  function createEvent(data) {
    console.log("post", data);

    fetch("/events/newEvent", {
      method: "POST",
      headers: { ...requestHeaders },
      body: data,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("successfully added event !");
        }
        return res;
      })
      .catch((err) => {
        console.log("catch error", err);
        //alert("erreur inconnue");
      });
  }

  const context = {
    eventsTab: evTab,
    createEvent: createEvent,
    getAllEvents: getAllEvents,
    getEventById: getEventById,
    deleteEventById: deleteEventById,
    updateEventById: updateEventById,
    singleEvent: singleEvent,
  };

  return (
    <eventContext.Provider value={context}>
      {props.children}
    </eventContext.Provider>
  );
}

export default EventContextProvider;
