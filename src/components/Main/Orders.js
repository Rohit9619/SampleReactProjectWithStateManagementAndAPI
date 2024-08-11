import React from "react";
import { useSelector } from "react-redux";

export default function Orders() {
  const orders = useSelector((state) => state.OrdersHandler);

  const id = JSON.parse(localStorage.getItem("LoginId"));
  const getData = orders.data.filter((items) => items.userId === id);

  return (
    <div className="container-fluid mt-3 mb-3 ps-5 pe-5">
      {getData.length < 1 ? (
        <div className="text-center">
          <div className="alert alert-primary" role="alert">
            Order Now!!
          </div>
        </div>
      ) : (
        getData.map((item, index) => (
          <div
            className="card shadow-sm mb-1"
            key={index}
            style={{ fontSize: "14px" }}
          >
            <div className="card-header shadow-sm">
              <div>Order-Id : {item.id}</div>
              <div>Order-Date: {item.date}</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div>Title: {item.title}</div>
                  <div>Price: ₹{item.price}</div>
                  <div>Quantity: {item.numberOfProducts}</div>
                  <div>OrderDate: {item.date}</div>
                </div>
                <div className="col text-center">
                  <img
                    src={item.source}
                    alt={item.title}
                    height={50}
                    width={50}
                  />
                  <div className="p-1">
                    <button className="btn btn-sm text-primary">
                      <i className="bi bi-share-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
