import RestaurentCard from "./RestaurentCard";
import data from "../utils/data";
import { useState } from "react";


const Body = () => {
    // local state variable are super powerful variable
    const arr = useState(data)

    // const [restaurentList, setRestaurentList] = arr;
    const restaurentList = arr[0];
    const setRestaurentList =arr[1];



    const handleFilter = () => {
        const filterData = restaurentList.filter(rate => rate.avgRating > 4.2);
        console.log(filterData)
        setRestaurentList(filterData)
    }

    

    return (
        <div className="body">
            <button onClick={handleFilter} className="filter-btn">Sort By Top Restaurent</button>
            <div className="res-container">
                {restaurentList.map((res, index) => (
                    <RestaurentCard key={index} resData={res} />
                ))}
            </div>
        </div>
    )
};


export default Body;