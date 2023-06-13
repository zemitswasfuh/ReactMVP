import React from "react";

const Vehicle = ({ make, model, imagesrc, onRentClick }) => {
  // console.log(imageSrc)
  return (
    <div className="vehicle">
      <img src={imagesrc} alt="Vehicle" className="pic" style={{ width: '200px', height: '150px' }}/>
      <div className="vicData">
        <p>Make: {make}</p>
        <p>Model: {model}</p>
      </div>
      <button onClick={onRentClick}>Rent</button>
    </div>
  );
};


export default Vehicle;

