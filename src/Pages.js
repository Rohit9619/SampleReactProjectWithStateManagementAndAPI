import React from "react";
import { useSelector } from "react-redux";
import Authentication from "./components/Authentication";
import Home from "./components/Main/Home";

export default function Page() {
  const check = useSelector((state) => state.RegisterHandler);

  let page = <Authentication />;

  if (localStorage.getItem("LoginId")) {
    const getDetails = check.data.find(
      (user) => user.Id === JSON.parse(localStorage.getItem("LoginId"))
    );

    if (getDetails.IsActive === true) {
      localStorage.setItem("token", JSON.stringify(getDetails.Token));
      page = <Home />;
    }
  }

  return page;
}
