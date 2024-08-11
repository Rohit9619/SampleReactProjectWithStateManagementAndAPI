import React, { Component } from "react";
import Navbar from "../../UI/Navbar";
import Items from "./Items";
import Modal from "../../UI/Modal";
import Filter from "../../UI/Filter";
import Orders from "./Orders";
import ProductDetails from "./ProductDetails";

import {
  loadData,
  valid,
  addToCart,
  removeFromCart,
  filterItems,
} from "../../Actions";
import { connect } from "react-redux";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      switch: false,
      shake: false,
      loading: false,
    };
  }

  async componentDidMount() {
    if (localStorage.getItem("ProductList")) {
      this.setState({ loading: false });
      return false;
    } else {
      this.setState({ loading: true });
      const response = await fetch(
        "https://shopping-app-6000a-default-rtdb.firebaseio.com/products.json"
      );
      const responseData = await response.json();
      console.log(responseData);

      console.log(responseData.items);
      this.props.loadData({ payload: responseData.items || [] });
      // localStorage.setItem("ProductList", JSON.stringify(productList));
      this.setState({ loading: false });
    }
  }

  addToCartHandler = (event) => {
    const name = event.target.name;
    const id = parseInt(event.target.id);
    const result = this.props.itemsList.find((item) => item.id === id);
    const item = {
      userId: JSON.parse(localStorage.getItem("LoginId")),
      id: result.id,
      category: result.category,
      source: result.source,
      title: result.title,
      price: result.price,
      numberOfProducts: 1,
    };
    if (name === "add") {
      this.setState({ shake: true });
      setTimeout(() => {
        this.setState({ shake: false });
      }, 500);
      this.props.addToCart({ payload: item });
    } else if (name === "addMore") {
      this.props.addToCart({ payload: item });
    } else {
      this.props.removeFromCart({ payload: item });
    }
  };

  logoutHandler = () => {
    const id = JSON.parse(localStorage.getItem("LoginId"));
    this.props.valid({
      payload: {
        id: id,
        flag: 0,
      },
    });
  };

  switchPageOrders = () => {
    this.setState({ switch: true });
  };

  switchPageHome = () => {
    if (window.location.search !== "") {
      window.history.pushState("", "", "/");
      this.setState({ switch: false });
    } else {
      this.setState({ switch: false });
    }
  };

  filter = (e) => {
    const category = e.target.id.toLowerCase();
    if (category === "search") {
      this.props.filterItems({ search: e.target.value, flag: 3 });
    } else {
      const value = document.getElementById(e.target.id).checked;
      if (value) {
        this.props.filterItems({ categories: category, flag: 1 });
      } else {
        this.props.filterItems({ categories: category, flag: 0 });
      }
    }
  };

  render() {
    const id = JSON.parse(localStorage.getItem("LoginId"));
    const items = this.props.items.filter((items) => items.userId === id);

    return (
      <div className="container-fluid m-0 p-0">
        <Navbar
          logoutHandler={this.logoutHandler}
          count={items.length}
          switchPageOrders={this.switchPageOrders}
          switchPageHome={this.switchPageHome}
          shake={this.state.shake}
          filter={this.filter}
        />
        <div className="container-fluid">
          <div className="row">
            {!this.state.switch && (
              <div className="">
                <Filter filters={this.filter} />
              </div>
            )}
            {
              <React.Fragment>
                {window.location.search !== "" && !this.state.switch ? (
                  <div className="col">
                    <ProductDetails addToCartHandler={this.addToCartHandler} />
                  </div>
                ) : (
                  <div className="col">
                    {this.state.loading ? (
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "100vh" }}
                      >
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : this.state.switch ? (
                      <Orders />
                    ) : (
                      <Items
                        items={this.props.itemsList}
                        addToCartHandler={this.addToCartHandler}
                      />
                    )}
                  </div>
                )}
              </React.Fragment>
            }
          </div>
        </div>

        <Modal
          Items={this.props.items}
          addToCartHandler={this.addToCartHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsList: state.ListHandler.data,
    items: state.cartHandler.data,
    registeredUsers: state.RegisterHandler.data,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  valid,
  loadData,
  filterItems,
})(Home);
