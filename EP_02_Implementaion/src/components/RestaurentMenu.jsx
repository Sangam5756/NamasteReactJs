import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurentMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurentMenu(id);


  return (
    <div className="flex justify-center py-20">
      <div className="mx-10 flex flex-col bg-slate-200 w-fit items-center p-2 gap-5">
        <h1 className="font-bold">{resInfo[0]?.name}</h1>
        <p>{resInfo[0]?.costForTwo}</p>
        <div className="flex flex-col  w-fit ">
          <h1 className=" capitalize mb-2">menu</h1>
          {resInfo[0]?.menu.map((res) => (
            <div className="">
              <p>
                {res.dishName} = {res.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
