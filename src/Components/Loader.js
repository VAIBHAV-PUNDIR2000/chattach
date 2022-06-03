import React from "react";
import { RingLoader } from "react-spinners";
const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RingLoader />
    </div>
  );
};

export default Loader;
