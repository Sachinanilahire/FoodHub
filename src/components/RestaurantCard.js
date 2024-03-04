import { CDN_URL } from "../utils/constant";
import React from "react";
let RestaurantCard = (props) => {
  const { resData } = props;
  var cuisines = resData.info.cuisines;
  var nameAPI = resData.info.name;

  var firstThreeCuisines = cuisines.slice(0, 3);
  var resName = nameAPI.slice(0, 20);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="cardData">
        <h3> {resName}</h3>
        <h5 className="card-cuisines"> 🍝 {firstThreeCuisines.join(", ")}</h5>
        <div className="res-row">
          <h5 className="card-rating"> &#x2605; {resData.info.avgRating} </h5>
          <h5 className="card-slaString"> 🛵 {resData.info.sla.slaString}</h5>
          <h5 className="card-areaName"> 📍 {resData.info.areaName} </h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
