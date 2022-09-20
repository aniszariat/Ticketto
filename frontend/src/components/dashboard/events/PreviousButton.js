import React from "react";
import { Link } from "react-router-dom";

export default function PreviousButton({ path }) {
  return (
    <Link to={path} className="btn btn-outline-dark rounded-1 mb-3 ">
      <i className="bi bi-arrow-left fw-3 " aria-hidden="true"></i> Previous
    </Link>
  );
}
