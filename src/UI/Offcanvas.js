import React from "react";
import Filter from "./Filter";
export default function Offcanvas(props) {
  return (
    <div
      className="offcanvas offcanvas-start offwidth"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          <i className="bi bi-funnel-fill"></i>
          Filter
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <Filter filters={props.filter} />
        {/* <div className="container-fluid d-flex flex-column align-items-start">
          <p className="border-bottom border-dark">Content Type</p>

          <div className="form-check form-switch form-check-reverse">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="Men's clothing"
              onChange={props.filter}
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
              id="Jewelery"
              onChange={props.filter}
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
              id="Electronics"
              onChange={props.filter}
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
              id="Women's clothing"
              onChange={props.filter}
            />
            <label className="form-check-label" htmlFor="women's clothing">
              Women's clothing
            </label>
          </div>

          <p className="border-bottom border-dark mt-2">Search</p>
          <div>
            <input
              className="form-control form-control-sm me-2"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={props.filter}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
