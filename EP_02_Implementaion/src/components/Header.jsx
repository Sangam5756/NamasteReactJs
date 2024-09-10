import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  return (<div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO_URL}
        alt=""
      />
    </div>

    <div className="nav-items">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
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
      </ul>
    </div>
  </div>
  );
}


export default Header;