import { ReastaurentMenu_Url } from "./Constants";
import { useState, useEffect } from "react";

const useRestaurentMenu = (id) => {
  const [resInfo, setResinfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const data = await response.json();
    console.log(data)
    console.log(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    // const filterdata = data.filter((res) => res.restaurantId === id);
    setResinfo(data);
  };

  return resInfo;
};


export default useRestaurentMenu;