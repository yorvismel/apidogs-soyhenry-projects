import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({
  image,
  name,
  temperament,
  weight_min,
  weight_max,
  id,
  lifeTime
}) {
  return (
    <div className="card-container">
      <Link className="link" to={`/home/${id}`}>
        <div className="card-image-container">
        <img className="card-image" src={image} alt={`imagen de: ${name}`} />
        </div>
        <div className="card-details">
        
          <h2>&#x1F436;{name}&#x1F436;</h2>
          <h4>Temperament   : {temperament}</h4>
          <h4>Weight Range: {weight_min} - {weight_max} Kg</h4>
          <h4> life : {lifeTime}</h4>
        </div>
      </Link>
    </div>
  );
}
