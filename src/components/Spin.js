import React from "react";
import loading from "./loading.gif";
const Spin = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="loading" width="30px" height="30px" />
    </div>
  );
};

export default Spin;
