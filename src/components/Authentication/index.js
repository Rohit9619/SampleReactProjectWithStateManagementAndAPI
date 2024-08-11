import React, { Component } from "react";
import { connect } from "react-redux";

import { valid, register } from "../../Actions";

import AuthCard from "../AuthCard";

class Authentication extends Component {
  constructor() {
    super();
    this.Username = React.createRef();
    this.Password = React.createRef();
    this.LUsername = React.createRef();
    this.LPassword = React.createRef();
    this.state = {
      show: false,
      message: "",
      text: "",
    };
  }

  submitRegister = () => {
    if (
      this.Username.current.value !== "" &&
      this.Password.current.value !== ""
    ) {
      const username = this.Username.current.value;
      const check = username.trim().includes("@");
      if (check === false) {
        this.setState({
          show: true,
          message: "fail",
          text: "@ in email required.",
        });
        return;
      }
      const results = this.props.registeredUsers.find(
        (user) => user.Username === this.Username.current.value
      );
      if (results) {
        this.setState({
          show: true,
          message: "fail",
          text: "User already exists!",
        });
        this.Username.current.value = "";
      } else {
        this.setState({
          show: true,
          message: "success",
          text: "User Successfully registered!!",
        });

        this.props.dispatch(
          register({
            payload: {
              Username: this.Username.current.value,
              Password: this.Password.current.value,
            },
          })
        );
      }
    } else {
      this.setState({ show: true, text: "Fill all the details!" });
    }
  };

  submitLogin = () => {
    console.log(this.LUsername.current.value);
    console.log(this.LPassword.current.value);
    if (
      this.LUsername.current.value === "" ||
      this.LPassword.current.value === ""
    ) {
      this.setState({ show: true, message: "Invalid UserID or Password!" });
      return;
    }

    const results = this.props.registeredUsers.find(
      (user) => user.Username === this.LUsername.current.value
    );
    if (results) {
      if (
        results.Username === this.LUsername.current.value &&
        results.Password === this.LPassword.current.value
      ) {
        this.props.dispatch(
          valid({
            payload: {
              id: results.Id,
              flag: 1,
            },
          })
        );
        localStorage.setItem("Auth", true);
      } else {
        this.setState({ show: true, message: "Invalid username or password!" });
        this.props.dispatch(
          valid({
            payload: {
              id: results.Id,
              flag: 0,
            },
          })
        );
      }
    } else {
      if (
        this.LUsername.current.value !== "" &&
        this.LPassword.current.value !== ""
      ) {
        this.setState({ show: true, message: "User not found!" });
        return;
      } else {
        this.setState({ show: true, message: "Enter Credentials!" });
      }
    }
  };

  cancel = () => {
    this.Username.current.value = "";
    this.Password.current.value = "";
  };

  onFocusHandler = () => {
    setTimeout(() => {
      this.setState((state) => {
        return {
          ...state,
          show: false,
          message: false,
        };
      });
    }, 500);
  };

  render() {
    const alertRegister = this.state.show && (
      <div
        className={
          this.state.message === "success"
            ? "alert alert-success shadow-sm"
            : "alert alert-danger shadow-sm"
        }
        role="alert"
      >
        {this.state.text}
      </div>
    );

    const alertLogin = this.state.show && (
      <div className="alert alert-danger shadow-sm" role="alert">
        {this.state.message}
      </div>
    );

    return (
      <div
        className="container-fluid p-5 d-flex flex-column align-items-center"
        style={{
          backgroundColor: "#FBAB7E",
          backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        }}
      >
        <AuthCard
          title={"SignUp"}
          alertLogin={alertLogin}
          alertRegister={alertRegister}
          Username={this.Username}
          Password={this.Password}
          LUsername={this.LUsername}
          LPassword={this.LPassword}
          onFocusHandler={this.onFocusHandler}
          cancel={this.cancel}
          submitLogin={this.submitLogin}
          submitRegister={this.submitRegister}
          toggle={"SignIn"}
        />
      </div>
    );
  }
}

const addStateToProps = (state) => {
  return {
    registeredUsers: state.RegisterHandler.data,
  };
};

export default connect(addStateToProps)(Authentication);
