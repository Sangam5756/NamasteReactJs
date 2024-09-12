import { CDN_URL } from "../utils/Constants";

const RestaurentCard = ({ resData }) => (
  <div className="w-[300px] h-[350px] hover:scale-105 rounded-lg hover:bg-slate-200 bg-slate-100 duration-200 overflow-hidden p-2 ">
    <img
      className="w-full rounded-lg  h-[200px]"
      src={
        CDN_URL +
        resData.cloudinaryImageId
      }
      alt="foodlogo"
    />
    <div className="flex flex-col   space-y-1 p-3 w-full">
      <h3 className="font-bold">{resData.name}</h3>
      <h4 className=" whitespace-normal break-words">{resData.cuisines.join(",")}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  </div>
);

export default RestaurentCard;