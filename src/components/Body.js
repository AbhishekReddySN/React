import RestaurantCard, { PromotedRescard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filterdRestaurents, setFilteredrestaurents] = useState([]);
  const [searchText, setsearchText] = useState("");
  const RestaurantCardPromoted = PromotedRescard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>Please check your internet connection and come back!!!</h1>;

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-button px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRest = listofRestaurants.filter((res) => {
                const restaurantNameMatch = res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());

                const cuisineMatch = res.info.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                );

                return restaurantNameMatch || cuisineMatch;
              });
              setFilteredrestaurents(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <button
            onClick={() => {
              const TopresObj = listofRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredrestaurents(TopresObj);
            }}
            className="px-4 py-2 border border-black bg-pink-900 rounded-lg "
          >
            Top Rated Restro
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filterdRestaurents.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurents/" + res.info.id}>
              {res.info.aggregatedDiscountInfoV3.discountTag ? (
                <RestaurantCardPromoted resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
