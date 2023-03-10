import React, { Component } from "react";
import loading from "./loading.gif";
export class Spin extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" width="30px" height="30px" />
      </div>
    );
  }
}

export default Spin;
