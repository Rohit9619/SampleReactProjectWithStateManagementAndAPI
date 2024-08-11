import React, { Component } from "react";
import Card from "../../UI/Card";

class Items extends Component {
  render() {
    return (
      <div className="container-fluid mt-3 mb-3">
        <button
          className="btn btn-warning hide shadow-sm"
          id="hover-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="bi bi-funnel-fill"></i>
          <span className="m-1">FILTER</span>
        </button>
        <div className="row g-2">
          {this.props.items.map((item) => (
            <div className="col-3" key={item.id}>
              <Card
                id={item.id}
                source={item.source}
                title={item.title}
                content={item.content}
                price={item.price}
                addToCartHandler={this.props.addToCartHandler}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Items;
