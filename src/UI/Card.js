import React from "react";

export default function Card(props) {
  return (
    <div className="card shadow-sm" style={{ width: "auto" }} key={props.id}>
      <div className="card-body overflow-auto">
        <img
          src={props.source}
          className="card-img-top p-2 img-height"
          alt={props.title}
          height={250}
        />
        <h6
          className="card-title"
          style={{ height: "100px", overflow: "hidden" }}
        >
          {props.title.length > 50
            ? props.title.substring(0, 50) + "..."
            : props.title}
          <p className="hide" style={{ fontSize: "12px" }}>
            {props.content.substring(0, 100) + "..."}
          </p>
        </h6>
        <p className="card-text">₹{props.price}</p>
        <div className="row text-center">
          <div className="col">
            <button
              className="btn btn-primary btn-sm shadow-sm"
              id={props.id}
              name="add"
              onClick={props.addToCartHandler}
            >
              Add to cart
            </button>
          </div>
          <div className="col">
            <a
              type="button"
              href={"http://localhost:3000?" + props.id}
              className="btn btn-primary btn-sm shadow-sm"
              name="View"
              target="_blank"
              rel="noreferrer"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
