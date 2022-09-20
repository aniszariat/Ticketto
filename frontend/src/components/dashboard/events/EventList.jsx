import React, { useContext, useEffect, useState } from "react";
import { getEvents } from "../../../service/eventAPI";
import { eventContext } from "../../../store/event-context";
import { confirm } from "./DeleteConfiramtion";
import PreviousButton from "./PreviousButton";
import TabEventItem from "./TabEventItem";

export default function Posts() {
  const [events, setevents] = useState([]);
  useEffect(() => {
    getEvents().then((res) => {
      setevents(res?.data);
    });
  }, []);

  const eventCtx = useContext(eventContext);

  const [deletMessage, setDeletMessage] = useState("wait");
  async function handleOnClick(event) {
    console.log("hoge!");
    if (await confirm("Are your sure?")) {
      setDeletMessage("Yes please!");
    } else {
      setDeletMessage("No!");
    }
    //console.log(`is ${items.Title} deleted ? ==>`, deletMessage)
    console.log(`is ${event} deleted ? ==>`, deletMessage);
  }
  const userId = localStorage.getItem("userId");
  const isAdmin = userId == localStorage.getItem("admin");

  return (
    <section id="TabTickets" className="container my-5 ">
      {/*title start*/}
      <div className="row">
        <div className="section-title">
          <h2>Events</h2>
          <p> Events List</p>
        </div>
      </div>

      <PreviousButton path={"/dashboard"}></PreviousButton>
      {/*title end*/}
      {/*table Tickets start*/}
      <div className="row mt-3">
        <div className="col-lg-12 mx-auto">
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              <div className="table-responsive">
                <table
                  id="example"
                  style={{ width: "100%" }}
                  className="table table-bordered"
                >
                  <thead className="bg-light text-center">
                    <tr>
                      <th>#</th>
                      {isAdmin ? <th>Event Organiser ID</th> : null}
                      <th>Event Title</th>
                      <th>Category</th>
                      <th>Datetime</th>
                      <th>Location</th>
                      <th>Event Tickets</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {isAdmin
                      ? events?.map((items, keys) => (
                          <TabEventItem
                            eventItems={items}
                            key={keys}
                            keys={keys}
                            //handleDelete={handleDelete}
                            handleDelete={handleOnClick}
                            isAdmin={isAdmin}
                          />
                        ))
                      : events
                          ?.filter((event) =>
                            event.EventCreator.includes(userId)
                          )
                          .map((items, keys) => (
                            <TabEventItem
                              eventItems={items}
                              key={keys}
                              keys={keys}
                              //handleDelete={handleDelete}
                              handleDelete={handleOnClick}
                              isAdmin={isAdmin}
                            />
                          ))}
                  </tbody>
                </table>
              </div>
              {/*Table Tickets end*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
