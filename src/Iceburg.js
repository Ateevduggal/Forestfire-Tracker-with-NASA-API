import React from "react";

const Iceburg = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <i className="fas fa-icicles"></i>
    </div>
  );
};

export default Iceburg;
