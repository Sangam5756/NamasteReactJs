import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
            // "https://mocki.io/v1/ddb95bb0-fa9a-49a3-a3e2-caaa9039d743"
            "https://mocki.io/v1/d8158884-05a5-435d-a13b-e2a94feeac45"
        );
        const data = await response.json();
        setRestaurentList(data);
        setSearchFilter(data)
    };

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
                    <RestaurentCard key={index} resData={res} />
                ))}
            </div>
        </div>
    );
};

export default Body;
