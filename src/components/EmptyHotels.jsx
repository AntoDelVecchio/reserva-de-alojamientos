import React from "react";

function EmptyHotels() {
  return (
    <div className="empty-ctn">
      <h3 className="empty-message">Lo sentimos!</h3>
      <i className="fas fa-globe-americas"></i>
      <i className="fas fa-hotel"></i>
      <i className="fas fa-cat"></i>
      <h3 className="empty-message">
        En este momento no se encontró hotel acorde a la información ingresada.{" "}
        <br />
        Intente de nuevo! 😀
      </h3>
    </div>
  );
}

export default EmptyHotels;
