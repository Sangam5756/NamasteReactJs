import { useState } from "react";
import ItemList from "./ItemList";



const RestaurentCategory = ({ data }) => {

    const [dropDown,setDropDown] = useState(false);

    const handleClick = ()=>{
        setDropDown(!dropDown)
    }

    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4  my-4 mx-auto m-auto">

                <div className="flex justify-between " onClick={handleClick}>
                    <span className="font-bold text-2xl"> {data.title} ({data.itemCards.length})</span>
                    <span className="text-2xl bg-gray-400 px-1 py-1 text-white rounded-lg">&#8595;</span>
                </div>
                {
                    dropDown && <ItemList items={data?.itemCards} />
                }

            </div>
            {/* Accordance */}
        </div>
    )

}

export default RestaurentCategory;