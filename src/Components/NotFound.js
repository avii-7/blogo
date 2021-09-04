import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <h2>Sorry</h2>
      <p className="notFound__p--margin">That Page cannot be found.</p>
      <Link to="/" className="notFound__link">Back to the homepage...</Link>
    </div>
  );
}
