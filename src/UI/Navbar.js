import React from "react";
import "./shake.css";

export default function Navbar(props) {
  const emailId = JSON.parse(localStorage.getItem("emailId"));

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm nav">
      <div className="container-fluid ms-5 me-5">
        <div className="navbar-brand">Shopping Center</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          className="btn show"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          style={{ display: "none" }}
        >
          <i className="bi bi-funnel-fill"></i>
        </button>

        <div
          className="collapse navbar-collapse"
          style={{ flexGrow: "inherit" }}
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                type="button"
                className="btn position-relative"
                onClick={props.switchPageHome}
              >
                Home
              </button>
            </li>
            <li type="button" className="nav-item float-end">
              <button
                type="button"
                className={
                  props.shake === true
                    ? "btn position-relative shake border border-dark"
                    : "btn position-relative"
                }
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Cart <i className="bi bi-cart"></i>
                <span
                  className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                  style={{ left: "74%" }}
                >
                  {props.count}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn position-relative"
                onClick={props.switchPageOrders}
              >
                View Order
              </button>
            </li>
            <li type="button" className="nav-item float-end">
              <button
                type="button"
                className="btn position-relative"
                onClick={props.logoutHandler}
              >
                Logout <i className="bi bi-box-arrow-right"></i>
              </button>
            </li>
            <li type="button" className="nav-item float-end">
              <button type="button" className="btn position-relative">
                {emailId.trim().substr(0, emailId.indexOf("@"))}{" "}
                <i className="bi bi-person-circle"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
