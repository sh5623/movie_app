import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const optionAxios = {
    headers: {
      "content-Type": "application/json",
    },
  };
  function DoLogout(props) {
    axios
      .post("http://localhost:8080/user/logout", optionAxios)
      .then((res) => {})
      .catch((error) => {});
  }

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/tour">Tour</Link>
      <Link to="/" onClick={DoLogout}>
        Logout
      </Link>
    </div>
  );
}

export default Navigation;
