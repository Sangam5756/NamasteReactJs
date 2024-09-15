import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";


const RestaurentMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurentMenu(id);
  
  const data = resInfo?.data?.cards[2]?.card?.card?.info;
  // console.log(data)


  // console.log(resInfo)
  const filterData = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log("filter",filterData)

  


  return (
    <div className="text-center py-20">
    <div className="text-center">

    <h1 className="font-extrabold text-3xl mb-5">{data?.name}</h1>
        <p className="text-2xl font-semibold py-1">{data?.costForTwoMessage}</p>
        <p className="text-2xl font-semibold py-1">{data?.cuisines?.join(" , ")}</p>
        
          
          {data?.menu?.map((res) => (
            <div className="">
              <p>
                {res.dishName} = {res?.costForTwoMessage}
              </p>
            </div>
          ))}
    </div>
        
      {filterData?.map((category)=>{
        return(
          <RestaurentCategory key={data?.title} data={category?.card?.card}/>
        )
      })}
    </div>
  );
};

export default RestaurentMenu;
