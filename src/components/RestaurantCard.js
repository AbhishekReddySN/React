import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    sla: { deliveryTime },
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className=" text-wrap h-[500px] m-4 p-4 w-[230px] bg-gray-200 rounded-2xl width: fit-content hover:bg-slate-500 ">
      <img
        className=" h-[250] w-[220] res-logo rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export const PromotedRescard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 mt-0 py-1 bg-black text-white rounded-xl">
          {props.resData.info.aggregatedDiscountInfoV3.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
