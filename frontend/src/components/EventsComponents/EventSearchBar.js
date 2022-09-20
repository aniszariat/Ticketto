// import { isDate } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { cayegoryContext } from "../../store/category-context";
import { eventContext } from "../../store/event-context";
const _ = require("lodash");
const m = require('moment')
function EventSearchBar() {
  const categoryCtx = useContext(cayegoryContext);
  useEffect(() => {
    categoryCtx.getAllCategories();
    eventsCtx.getAllEvents();
  }, []);
  const eventsCtx = useContext(eventContext);

  const uniqueAddress = [
    ...new Set(_.map(eventsCtx.eventsTab, "AdresseEvent")),
  ];
  //console.log('uniqueAddress', uniqueAddress)
  const [filterEvent, setFirstEvent] = useState({
    filterCat: "",
    filterAdress: "",
    filterDate: "",
  });
  const handleChange = (event) => {
    console.log(event.target.value);
    setFirstEvent({
      filterCat: event.target.value.startsWith("filterCat")
        ? event.target.value.slice(event.target.value.indexOf(" ") + 1)
        : filterEvent.filterCat,
      filterAdress: event.target.value.startsWith("filterAdress")
        ? event.target.value.slice(event.target.value.indexOf(" ") + 1)
        : filterEvent.filterAdress,
      filterDate: !event.target.value.includes('filter')
        ?  event.target.value
        : filterEvent.filterDate,
    });
  };
  // console.log(filterEvent);

  return (
    <>
       
      {/*search bar*/}
      <section className="bg-dark container-fluid p-5  my-5" id="search-bar">

      <div className="container p-4 mt-5 bg-light shadow-lg mb-5 rounded-1 ">
    <div className="row">
      <p className="lead">Lorem ipsum dolor sit amet?</p>
    </div>
    <div className="row justify-content-center align-content-around g-3">
      <div className="col-lg-3 col-12">
        <div className="form-floating mb-4">
        <select
                onChange={handleChange}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option defaultValue={0}>Select Category</option>
                {categoryCtx.categoriesTab.map((cat, index) => {
                  return (
                    <option
                      value={"filterCat " + cat.CategoryEvent}
                      key={index}>
                      {cat.CategoryEvent}
                    </option>
                  );
                })}
              </select>
             
          <label htmlFor="floatingSelect">WHAT</label>
        </div>
      </div>
      <div className="col-lg-3 col-12">
        <div className="form-floating">
        <select
                onChange={handleChange}
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option defaultValue={0}>Select Location</option>
                {uniqueAddress.map((address, index) => {
                  return (
                    <option value={"filterAdress " + address} key={index}>
                      {address}
                    </option>
                  );
                })}
              </select>
          <label htmlFor="floatingSelect">WHERE</label>
        </div>
      </div>
      <div className="col-lg-3 col-12">
      <form className="form-floating">
              <input
                onChange={handleChange}
                type="date"
                className="form-control"
                id="floatingInputValue"
              />
              <label htmlFor="floatingInputValue">Select the date</label>
            </form>
      </div>
      <form className="form-floating col-lg-3 col-12 p-2 align-middle">
        <a href="#" className="btn btn-dark rounded-1 w-75 p-2"><i className="bi bi-search me-2"/>Search</a>
      </form>
    </div>
  </div>

      </section>

    </>
  );
}

export default EventSearchBar;
