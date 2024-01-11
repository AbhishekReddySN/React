import React, { useState } from "react";
import ItemList from "./ItemList";
const RestaurentCategory = ({ data, initialShowItems }) => {
  const [showItems, setShowItems] = useState(initialShowItems);
  const handleCLick = () => setShowItems(!showItems);

  return (
    <div>
      {/*Accordian Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleCLick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
