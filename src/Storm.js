import React from "react";

const Storm = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker">
      <i className="fas fa-cloud-showers-heavy"></i>
    </div>
  );
};

export default Storm;
