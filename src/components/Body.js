import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

let Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
    // setFilteredRestraunts(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  return resturantList.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurant, cuisine or a dish"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={() => {
              console.log(searchText);
              let filteredResList = resturantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunts(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <div className="res-container">
          {resturantList.map((restraunt) => (
            <Link
              key={restraunt.info.id}
              to={"/restaurants/" + restraunt.info.id}
            >
              {" "}
              <RestaurantCard resData={restraunt} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
