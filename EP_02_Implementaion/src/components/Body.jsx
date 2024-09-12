import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {RestaurentList_URL} from "../utils/Constants"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // local state variable are super powerful variable

    const [restaurentList, setRestaurentList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            RestaurentList_URL
        );
        
        const data = await response.json();
        setRestaurentList(data);
        setSearchFilter(data)
    };
    

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like You are Offline Please check Your Internet</h1>

    if (restaurentList.length === 0) {
        return <Shimmer />;
    }


    return (
        <div className="body">
            <div className="filter">

                {/* search */}
                <div className="search">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchText}
                        onChange={(e) =>setSearchText(e.target.value)}
                    />
                    <button
                        onClick={
                            () => {
                                const filter = restaurentList.filter((res) => res.name.toLowerCase().includes(searchText.trim().toLowerCase()))
                                setSearchFilter(filter)
                            }
                        }
                        className="search-btn"
                    >search</button>
                </div>


                {/* filter by rating */}
                <button
                    onClick={() => {
                        const filterData = restaurentList.filter(
                            (rate) => rate.avgRating > 4.2
                        );
                        console.log(filterData);
                         setSearchFilter(filterData);
                    }}
                    className="filter-btn"
                >
                    Sort By Top Restaurent
                </button>
            </div>

            <div className="res-container">
                {searchFilter.map((res, index) => (
                   <Link key={res.id} to={`/restaurent/${res.id}`}> <RestaurentCard key={index} resData={res} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
