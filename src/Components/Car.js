import React from "react";

const Car = ({ brand, year, model, color }) => {
  brand = "hyundai";
  return (
    <div>
      Brand: {brand}
      Year: {year}
      Model:{model}
      Color: {color}
    </div>
  );
};
export default Car;
