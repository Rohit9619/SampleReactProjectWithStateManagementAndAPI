import React from "react";
// import { useDispatch } from "react-redux";
// import { filterItems } from "../Actions";

export default function Filter({ filters }) {
  return (
    <nav
      className="offcanvas offcanvas-start offwidth navbar navbar-expand-lg border border-dark border-start-0 rounded-3 mt-3 d-flex align-items-start shadow-sm"
      // id="filter"
      style={{ width: "200px", height: "fit-content" }}
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="container-fluid d-flex flex-column align-items-start">
        <div className="navbar-brand mb-2">
          <i className="bi bi-funnel-fill"></i>
          <b> Filter</b>
        </div>

        <p className="border-bottom border-dark">
          <b>Content Type</b>
        </p>

        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="men's clothing"
            onChange={filters}
          />
          <label className="form-check-label" htmlFor="men's clothing">
            Men's clothing
          </label>
        </div>

        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="jewelery"
            onChange={filters}
          />
          <label className="form-check-label" htmlFor="jewelery">
            Jewelery
          </label>
        </div>

        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="electronics"
            onChange={filters}
          />
          <label className="form-check-label" htmlFor="electronics">
            Electronics
          </label>
        </div>

        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="women's clothing"
            onChange={filters}
          />
          <label className="form-check-label" htmlFor="women's clothing">
            Women's clothing
          </label>
        </div>

        <p className="border-bottom border-dark mt-2">
          <b>Search</b>
        </p>
        <div>
          <input
            className="form-control form-control-sm me-2"
            id="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={filters}
          />
        </div>
      </div>
    </nav>
  );
}
