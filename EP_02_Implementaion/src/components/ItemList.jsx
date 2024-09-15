import { CDN_URL } from "../utils/Constants"

const ItemList = ({ items }) => {
    console.log("items", items)
    return (
        <div>
            <div>
                {items?.map((item =>
                (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-200 flex justify-between">
                      <div className="w-9/12">
                      <div className="text-left py-2">
                            <span className="text-left text-xl">{item?.card?.info?.name}</span>
                            <span> - ₹{(item?.card?.info?.price || item?.card?.info?.defaulPrice) / 100}</span>
                        </div>

                        <p className="text-xs">{item?.card?.info?.description}</p>

                      </div>

                       <div className="w-3/12 p-4">
                       <div className="absolute ">
                       <button className="  bg-green-400   shadow-lg rounded-r-full   p-1 cursor-pointer  ">Add +</button>
                       </div>
                       <img src={CDN_URL+item?.card?.info?.imageId} alt="" className=" w-full rounded-sm" />
                       </div>
                    </div>

                )))}
            </div>
        </div>

    )

}

export default ItemList