import React, { createRef, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../service/categoryAPI";
import { eventContext } from "../../../store/event-context";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import Moment from "moment";
import jwt from "jwt-decode"; // import dependency
export default function UpdateEvent() {
  let params = useParams();
  var auth = jwt(localStorage.getItem("login"));
  console.log("auth", auth);
  console.log("_id", params.id);
  const [category, setcategory] = useState([]);
  let eventCtx = useContext(eventContext);
  useEffect(() => {
    getCategories().then((res) => {
      setcategory(res?.data);
    });
    eventCtx.getAllEvents();
  }, []);
  let selected = eventCtx.eventsTab.find((e) => e._id == params.id);
  console.log("selectedEvent before update", selected);

  const fileInput = createRef();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: selected ? selected : null,
  });
  const onEventSubmit = (data) => {
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]);
    }
    fd.append("PosterEvent", fileInput.current.files[0]);
    console.log("afetr update", data);
    eventCtx.updateEventById(params.id, fd);
  };
  return (
    <>
      {selected ? (
        <form
          className="row g-3  mb-5 needs-validation"
          method="post"
          onSubmit={handleSubmit(onEventSubmit)}
        >
          {/* <div className="col-md-6"> */}
          <div className="col-md-4">
            <label htmlFor="validationCustom05" className="form-label">
              Organizer ID
            </label>
            <input
              // type="text"
              //type="password"
              className="form-control"
              id="validationCustom05"
              //disabled
              hidden //! only ADMIN can see the organizer ID
              readOnly
              value={auth.userId}
            />
            <div className="invalid-feedback">Please provide a valid ID</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="Title"
              defaultValue={selected.Title}
              onChange={(e) => setValue("Title", e.target.value)}
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
              {...register("DateEvent", { required: true })}
              required
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
              defaultValue={selected.AdresseEvent}
              {...register("AdresseEvent", { required: true })}
              required
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
              required
              //defaultChecked
              defaultValue={selected.CategoryEvent}
              {...register("CategoryEvent")}
            >
              <option className="bg-light" value={""}>
                {/* <strong>Choose...</strong> */}
                Choose...
              </option>
              {category?.map((items, keys) => (
                <option key={keys} value={items.CategoryEvent}>
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
                defaultValue={selected.Duration}
                required
                {...register("Duration", { required: true })}
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
                defaultValue={selected.Description}
                name="Description"
                {...register("Description", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Poster Event
            </label>
            {/* <input type="file" name="PosterEvent"  accept="image/*" ref={fileInput} /> */}
            <input
              name="PosterEvent"
              accept="image/*"
              ref={fileInput}
              type="file"
              className="form-control"
              id="validationCustom05"
              required
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
            <a
              className="rounded-circle  ms-2 btn btn-outline-light text-dark border-0"
              type="submit"
            >
              <i className="bi bi-trash" aria-hidden="true" />
            </a>
          </div>
        </form>
      ) : (
        <div
          style={{
            border: "5px solid #FFFF00",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
    </>
  );
}
