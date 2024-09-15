import RestaurentCard, { withPromoted } from "./RestaurentCard";
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

    const RestaurentwithPromotedCard =withPromoted(RestaurentCard);

    const onlineStatus = useOnlineStatus();


    if(onlineStatus === false) return <h1>Looks like You are Offline Please check Your Internet</h1>

    if (restaurentList.length === 0) {
        return <Shimmer />;
    }


    return (
        <div className="mx-2">
            <div className="flex justify-center gap-5 mt-10">

                {/* search */}
                <div className="">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchText}
                        onChange={(e) =>setSearchText(e.target.value)}
                        className="bg-slate-150  py-1 outline-none px-2 bg-gray-100 rounded-md mx-2"
                        placeholder="Search here"
                    />
                    <button
                        onClick={
                            () => {
                                const filter = restaurentList.filter((res) => res.name.toLowerCase().includes(searchText.trim().toLowerCase()))
                                setSearchFilter(filter)
                            }
                        }
                        className="bg-green-200 py-1 rounded-md px-2 hover:bg-green-500 duration-200"
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
                     className="bg-green-200 py-1 rounded-md px-2 hover:bg-green-500 duration-200"
                >
                    Sort By Top Restaurent
                </button>
            </div>

            <div className="flex  flex-wrap ml-8 gap-5 ">
                {searchFilter.map((res, index) => (
                   <Link key={res.id} to={`/restaurent/${res.id}`}> 
                   {/* if the restaurent is promoted then show the promoted label */}
                  {res?.promoted ?(<RestaurentwithPromotedCard key={index} resData={res} />) : (<RestaurentCard key={index} resData={res} />)}
                   
                   </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
