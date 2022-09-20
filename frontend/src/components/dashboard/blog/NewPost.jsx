import React from "react";

export default function NewPost() {
  return (
    <section id="BlogPosts" className="container">
      <div className="row">
        <div className="section-title">
          <h2>News</h2>
          <p>Create Blog Posts</p>
        </div>
      </div>
      <form className="row g-3  mb-5 needs-validation" noValidate>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom05" className="form-label">
            Creator ID
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid ID</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom01" className="form-label">
            Title Post
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            defaultValue="Shaun lee moon"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom02" className="form-label">
            Date Post
          </label>
          <input
            type="date"
            className="form-control"
            id="validationCustom02"
            defaultValue="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="validationCustom01" className="form-label">
            Object Post
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            defaultValue="Shaun lee moon"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6 mb-3">
                    <label htmlFor="inputZip" className="form-label ">Blog Poster</label>
                    <input type="file" className="form-control p-2" id="inputZip" />
                  </div>
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor className="form-label">
              Blog Body Text
            </label>
            <textarea
              className="form-control"
              name
              id
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
   
        <div className="col-12 mb-3">
          <button className="btn btn-dark btnDash rounded-1" type="submit">
            Submit Post
          </button>
          <a
            className="rounded-circle  ms-2 btn btn-outline-light text-dark border-0"
            type="submit"
          >
            <i className="bi bi-trash" aria-hidden="true" />
          </a>
        </div>
      </form>
    </section>
  );
}
