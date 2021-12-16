import React from "react";

const Valcano = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className="location-marker" onClick={onClick}>
        <i className="fas fa-fire-alt"></i>
      </div>
    </>
  );
};

export default Valcano;
