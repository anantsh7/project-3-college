import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {

  constructor() {
    super();
    sessionStorage.setItem("isAuthenticated", 0);
  }

  render() {
    return <Redirect to="/login" />
  }




}

export default Logout;