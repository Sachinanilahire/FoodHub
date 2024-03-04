import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constant";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuInfo, setmenuInfo] = useState(null);

  let { resId } = useParams();

  useEffect(() => {
    menuApi();
  }, []);

  const menuApi = async () => {
    let menuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2467218&lng=72.9759713&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await menuData.json();
    console.log(json);
    setmenuInfo(json.data);
  };

  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    areaName,
    cloudinaryImageId,
  } = menuInfo?.cards[0]?.card?.card?.info || {};
  const { lastMileTravelString } =
    menuInfo?.cards[0]?.card?.card?.info?.sla || {};

  const { itemCards } =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  // const { itemCards } =
  //   menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card || {};
  console.log(itemCards);

  if (menuInfo === null) return <Shimmer />;
  return (
    // Res-details
    <div className="menu-card">
      <div className="res-details">
        <div className="res-menu-data">
          <h5 className="res-name">{name} </h5>
          <div className="res-details-list">
            <h5>🍝 {cuisines.join(", ")}</h5>

            <h5>📍{areaName}</h5>
            <h5>🔻{lastMileTravelString}</h5>
          </div>
        </div>
        <div className="res-menu-img">
          <img
            className="menu-res-img"
            alt="res-logo"
            width={50}
            src={CDN_URL + cloudinaryImageId}
          />
          <hr></hr>
          <hr></hr>
          <h5>&#x2605; {avgRatingString}</h5>
          <h5>{totalRatingsString}</h5>
        </div>
      </div>
      {/* Menu */}
      <div className="menu_list">
        <ul>
          {itemCards.map((item) => (
            <div className="list-group-item" key={item.card.info.id}>
              <div className="list">{item.card.info.name}</div>{" "}
              <div className="price">
                {"Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </div>
              <div className="menu_list_btn">
                {" "}
                <button className="menu_btn_plus">+</button>
                <button className="menu_btn_minus">-</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
