import React from "react";

const Forest = ({ onClick }) => {
  return (
    <>
      <div className="location-marker" onClick={onClick}>
        <i className="fa-brands fa-gripfire"></i>
      </div>
    </>
  );
};

export default Forest;
