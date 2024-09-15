import { CDN_URL } from "../utils/Constants";

const RestaurentCard = ({ resData }) => (
  <div className="w-[300px] mt-10 h-[350px] hover:bg-gray-300  rounded-lg bg-gray-200 duration-300 overflow-hidden p-2 ">
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


export const withPromoted = (RestaurentCard) => {
  return (props) => {

    return (
      <div className="">
        <label className="absolute bg-black mx-1 p-2 text-white rounded-lg">Promoted</label>
        <RestaurentCard {...props} />
      </div>

    )
  }
}



export default RestaurentCard;