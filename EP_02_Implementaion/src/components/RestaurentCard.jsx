import { CDN_URL } from "../utils/Constants";

const RestaurentCard = ({ resData }) => (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          resData.cloudinaryImageId
        }
        alt="foodlogo"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(",")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.sla.deliveryTime} mins</h4>
    </div>
  );

export default RestaurentCard;