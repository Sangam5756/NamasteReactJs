import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurentMenu = () => {
  const { id } = useParams();
  
  const resInfo =useRestaurentMenu(id);

  
  return (
    <div>
      <h1>{resInfo[0]?.name}</h1>
      <p>{resInfo[0]?.costForTwo}</p>
      <h1>menu</h1>
      {resInfo[0]?.menu.map((res) => (
        <div>
          <p>
            {res.dishName} = {res.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RestaurentMenu;
