import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filterdRestaurents, setFilteredrestaurents] = useState([]);
  const [searchText, setsearchText] = useState("");

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

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
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
        <button
          onClick={() => {
            const TopresObj = listofRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredrestaurents(TopresObj);
          }}
          className="filter-btn"
        >
          Top Rated Restro
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurents.map((res) => (
          <Link key={res.info.id} to={"/restaurents/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
