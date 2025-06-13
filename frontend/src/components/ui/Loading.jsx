import React from "react";
import "./Loading.css";
export const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="loading"></span>
      </div>
      <p style={{ fontSize: "20px" }}>Loading...</p>
    </div>
  );
};
