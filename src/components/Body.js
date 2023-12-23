import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resObj);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const TopresObj = resObj.filter((res) => res.info.avgRating >= 4);
            setlistofRestaurants(TopresObj);
          }}
          className="filter-btn"
        >
          Top Rated Restro
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
