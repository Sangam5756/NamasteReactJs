import { ReastaurentMenu_Url } from "./Constants";
import { useState, useEffect } from "react";

const useRestaurentMenu = (id) => {
  const [resInfo, setResinfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(ReastaurentMenu_Url);
    const data = await response.json();

    const filterdata = data.filter((res) => res.restaurantId === id);
    setResinfo(filterdata);
  };

  return resInfo;
};


export default useRestaurentMenu;