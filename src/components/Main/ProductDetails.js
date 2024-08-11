import React from "react";
import { useSelector } from "react-redux";

export default function ProductDetails(props) {
  const Details = useSelector((state) => state.ListHandler.data);
  const id = window.location.search.split("?")[1];
  const item = Details.find((item) => item.id === parseInt(id));

  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <h5 className="card-header">Category : {item.category}</h5>
        <div className="card-body">
          <div className="row g-2">
            <div className="col">
              <img
                className="viewDetails-img-height"
                src={item.source}
                alt={item.id}
                height={500}
                width={500}
              />
            </div>
            <div className="col">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.content}</p>
              <p className="card-text">₹{item.price}</p>
              <button
                className="btn btn-warning btn-sm"
                id={item.id}
                name="add"
                onClick={props.addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
