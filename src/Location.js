import React from "react";

const Location = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className="location-marker" onClick={onClick}>
        <i className="fas fa-burn"></i>
      </div>
    </>
  );
};

export default Location;
