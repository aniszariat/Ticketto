/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import React, { createRef, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../../service/categoryAPI";
import { eventContext } from "../../../store/event-context";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import TicketsTab from "./TicketsTab";
import "./eventForm.css";

//*** A Disabled React component */
function DisabledTicketsForm({ ticketsDisabled, children }) {
  const disabledStyle = {
    opacity: 0.5,
    pointerEvents: "none",
  };

  return (
    <div
      style={ticketsDisabled ? disabledStyle : {}}
      disabled={!!ticketsDisabled}
    >
      {children}
    </div>
  );
}

export default function AddEventForm({ update }) {
  //** Tickets variables */
  const ticketPacks = ["1 : Premium", "2 : Standard", "3 : Normal"];
  const [category, setcategory] = useState([]);
  const [ticketsCat, setTicketsCat] = useState("1:Premium");
  const [ticketsData, setTicketsData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const submitButtonDisabled = ticketsData.some((ticket) => !ticket.Validated);
  const handleRadioChange = async (event) => {
    setTicketsCat(event.target.value);
    console.log(event.target.value);
    const valueCases = {
      1: ["Standard", "Normal"],
      2: ["Normal"],
    };
    setTicketsData((prevState) => {
      let newState = [...prevState];
      const categoriesToDelete = valueCases[event.target.value[0]] || [];
      newState = newState.filter(
        (el) => !categoriesToDelete.includes(el.Category)
      );
      return newState;
    });
    console.log("ticketsCat", ticketsCat);
  };

  //** rest form fields  */
  const eventsCtx = useContext(eventContext);
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((res) => {
      setcategory(res?.data);
    });
    if (update) {
      eventsCtx.getEventById(params.id);
    }
  }, []);
  useEffect(() => {
    if (!eventsCtx.singleEvent._id) return;
    const ticketsLength = eventsCtx.singleEvent.EventTickets.length;
    setTicketsCat(ticketPacks[ticketsLength - 1]);
  }, [eventsCtx.singleEvent]);

  const fileInput = createRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onEventSubmit = (data) => {
    // console.log(data);
    // console.log(typeof data);
    // console.log('fileInput', fileInput)
    // console.log({...data,'PosterEvent':fileInput.current.files[0].name});
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]);
    }
    if (fileInput.current.files?.length) {
      fd.append("PosterEvent", fileInput.current.files[0]);
    }
    const userId = localStorage.getItem("userId");
    fd.append("EventCreator", userId);
    fd.append("EventTickets", JSON.stringify(ticketsData));
    update
      ? eventsCtx.updateEventById(params.id, fd)
      : eventsCtx.createEvent(fd);
    navigate("/listEvent");
    window.location.reload();
    // if (update) {
    // }
  };
  return (
    <>
      {update && !eventsCtx.singleEvent._id ? (
        <LoadingSpinner />
      ) : (
        <form
          className="row g-3  mb-5 needs-validation"
          method="post"
          onSubmit={handleSubmit(onEventSubmit)}
        >
          {localStorage.getItem("userId") == localStorage.getItem("admin") ? (
            <div className="col-md-4">
              <label htmlFor="validationCustom05" className="form-label">
                Organizer ID
              </label>
              <input
                type="text"
                className="form-control "
                id="validationCustom05"
                defaultValue={localStorage.getItem("userId")}
                disabled
              />
              <div className="invalid-feedback">Please provide a valid ID</div>
            </div>
          ) : null}
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="Title"
              defaultValue={eventsCtx?.singleEvent?.Title || ""}
              {...register("Title", { required: true })}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Date Event
            </label>
            <input
              type="date"
              className="form-control"
              id="validationCustom02"
              name="DateEvent"
              defaultValue={
                moment(eventsCtx?.singleEvent?.DateEvent).format(
                  "YYYY-MM-DD"
                ) || ""
              }
              {...register("DateEvent")}
              //{...register("DateEvent", { required: true })}
              //required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="AdresseEvent"
              {...register("AdresseEvent")}
              defaultValue={eventsCtx?.singleEvent?.AdresseEvent || ""}
              //{...register("AdresseEvent", { required: true })}
              //required
            />
            <div className="invalid-feedback">
              Please provide a valid Adress.
            </div>
          </div>

          <div className="col-md-3">
            <label htmlFor="validationCustom04" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="validationCustom04"
              // required
              {...register("CategoryEvent")}
            >
              <option className="bg-light" value={""}>
                {/* <strong>Choose...</strong> */}
                Choose...
              </option>
              {category?.map((items, keys) => (
                <option
                  key={keys}
                  value={items.CategoryEvent}
                  selected={eventsCtx?.singleEvent?.CategoryEvent || ""}
                >
                  {items.CategoryEvent}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid Category.
            </div>
          </div>

          <div className="col-md-3">
            <label htmlFor="validationCustomUsername" className="form-label">
              Duration
            </label>
            <div className="input-group" aria-placeholder="2h">
              <input
                type="number"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                //required
                //{...register("Duration", { required: true })}
                {...register("Duration")}
                defaultValue={eventsCtx?.singleEvent?.Duration || ""}
              />
              <div className="invalid-feedback">Please choose a Duration.</div>
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                rows={3}
                name="Description"
                //{...register("Description", { required: true, maxLength: 1000 })}
                {...register("Description")}
                defaultValue={
                  eventsCtx?.singleEvent?.Description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit"
                }
              />
            </div>
          </div>

          {/* <Disabled > */}
          <DisabledTicketsForm ticketsDisabled={disabled}>
            <h1>
              Click on the burron bellow to {disabled ? "enable" : "disable"}{" "}
              this section.
            </h1>
            <div>
              <div className="col-12">
                <label htmlFor="Description" className="form-label">
                  Tickets
                </label>
                <div>
                  {ticketPacks.map((pack, index) => (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked={
                          update
                            ? index ===
                              eventsCtx.singleEvent.EventTickets.length - 1
                            : index === 0
                        }
                        value={pack}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        {pack}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <TicketsTab
                ticketsCat={ticketsCat}
                ticketPacks={ticketPacks}
                ticketsData={ticketsData}
                setTicketsData={setTicketsData}
                disabled={disabled}
                update={update}
              ></TicketsTab>
            </div>
          </DisabledTicketsForm>
          <button
            className={
              disabled ? "btn ticketDataOk rounded-1" : "btn rounded-1"
            }
            onClick={() => setDisabled(!disabled)}
            disabled={submitButtonDisabled}
          >
            {disabled
              ? "confirmed tickets data"
              : submitButtonDisabled
              ? "Please provide valid tickets data"
              : "Please confirm tickets data"}
          </button>

          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              {update ? "Change " : ""}Poster Event
            </label>
            {/* <input type="file" name="PosterEvent"  accept="image/*" ref={fileInput} /> */}
            {update ? (
              <img
                className="img-fluid"
                src={eventsCtx.singleEvent.PosterEvent}
                alt="Event Poster"
              />
            ) : null}
            <input
              name="PosterEvent"
              accept="image/*"
              ref={fileInput}
              type="file"
              className="form-control"
              id="validationCustom05"
            />
            <div className="invalid-feedback">
              Please provide a valid image.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Event teaser
            </label>
            <input
              type="url"
              id="url"
              placeholder="https://EventTeaser.com"
              pattern="https://.*"
              className="form-control"
              name="EventTeaser"
              {...register("EventTeaser")}
              defaultValue={eventsCtx?.singleEvent?.EventTeaser || ""}
            />
            <div className="invalid-feedback">
              Please provide a valid image.
            </div>
          </div>

          <div className="col-12 ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <button
              className="btn btn-dark btnDash rounded-1 col-3"
              type="submit"
            >
              Submit Event
            </button>
            <button
              className="rounded-circle  ms-2 btn btn-outline-secondary fs-5 border-0"
              type="button"
              onClick={() => {
                reset();
              }}
            >
              <i className="bi bi-arrow-clockwise" aria-hidden="true" />
            </button>
          </div>
        </form>
      )}
    </>
  );
}
