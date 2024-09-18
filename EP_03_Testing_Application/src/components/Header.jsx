import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const  {loggedInUser} = useContext(UserContext)

  const cart = useSelector(state => state?.cart?.items)


  return (
    <div className="flex mx-2  justify-between items-center   shadow-md shadow-blue-300 rounded-md  py-2 mb-2">
      <img
        className="w-32 "
        src={LOGO_URL}
        alt=""
      />

      <div className="">
        <ul className="flex gap-5 mx-20">
          <li>
            <Link className="" to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            Status : {onlineStatus ? "online" : "offline"}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart ({cart.length} items)</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>


          <button onClick={() => {
            btnName === "Login" ? setBtnName("logout") : setBtnName("Login")
            console.log(btnName)
          }} className="login-btn">{btnName}</button>
        
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}


export default Header;