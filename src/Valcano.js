import React from "react";

const Valcano = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className="location-marker" onClick={onClick}>
        <i className="fa-solid fa-volcano"></i>
      </div>
    </>
  );
};

export default Valcano;
