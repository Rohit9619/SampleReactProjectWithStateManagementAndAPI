import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BuyItems, removeFromCart } from "../Actions";

export default function Modal(props) {
  const [alert, setAlert] = useState(false);
  const orders = useSelector((state) => state.OrdersHandler);

  const id = JSON.parse(localStorage.getItem("LoginId"));
  const getData = props.Items.filter((items) => items.userId === id);

  const dispatch = useDispatch();

  const buyHandler = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const items = getData.map((item) => ({
      userId: JSON.parse(localStorage.getItem("LoginId")),
      id: Date.now(),
      category: item.category,
      source: item.source,
      title: item.title,
      price: item.price,
      numberOfProducts: item.numberOfProducts,
      date: date,
    }));
    dispatch(BuyItems({ data: items }));

    dispatch(
      removeFromCart({
        payload: {
          clear: true,
        },
      })
    );

    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Cart Items
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {getData.length < 1 ? (
              <div className="text-center"> Cart is empty !!! </div>
            ) : (
              getData.map((item, index) => (
                <div className="card shadow-sm mb-1" key={index}>
                  <div className="card-body">
                    <img
                      src={item.source}
                      alt={item.title}
                      height={50}
                      width={50}
                    />
                    <div>Title: {item.title}</div>
                    <div>Price: {item.price}</div>
                    <div
                      className="btn-group btn-group-sm mx-auto"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        id={item.id}
                        name="remove"
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={props.addToCartHandler}
                      >
                        -
                      </button>
                      <button type="button" className="btn border border-dark">
                        {item.numberOfProducts}
                      </button>
                      <button
                        id={item.id}
                        name="addMore"
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={props.addToCartHandler}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer">
            {alert && (
              <div className="alert alert-success" role="alert">
                Order successfull!
                <div>Total Price : ₹{orders.totalPrice}</div>
              </div>
            )}
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={getData.length > 0 ? false : true}
              onClick={buyHandler}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
