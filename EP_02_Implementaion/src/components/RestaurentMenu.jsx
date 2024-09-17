import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useEffect, useState } from "react";


const RestaurentMenu = () => {
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurentMenu(id);
 



  const data = resInfo?.data?.cards[2]?.card?.card?.info;
  const filterData = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")




  return (

    <div className="py-20" >

      <div className="text-center">
        <h1 className="font-extrabold text-3xl mb-5">{data?.name}</h1>
        <p className="text-2xl font-semibold py-1">{data?.costForTwoMessage}</p>
        <p className="text-2xl font-semibold py-1">{data?.cuisines?.join(" , ")}</p>
      </div>

      {filterData?.map((category, index) => {
        return (
          <RestaurentCategory
            key={data?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>
              setShowIndex(index === showIndex ? null : index)
              
            }
          />
        )
      })}
    </div>
  );
};

export default RestaurentMenu;
