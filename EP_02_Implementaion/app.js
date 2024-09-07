import React from "react";
import ReactDOM from "react-dom/client";
import { data } from "./data.js";
/*
 * Header
    -Logo
    -Nav-items
 * Body
    -search
    -restaurent container
    -reastaurent card
        -img
        -name of res, star rating ,cusine, delivery-Time
 * Footer
    -copyright
    -contact
    -links
    -Address

*/

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        alt=""
      />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurentCard = ({ resData }) => (
  <div className="res-card">
    <img
      className="res-logo"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        resData.cloudinaryImageId
      }
      alt="foodlogo"
    />
    <h3>{resData.name}</h3>
    <h4>{resData.cuisines.join(",")}</h4>
    <h4>{resData.avgRating}</h4>
    <h4>{resData.sla.deliveryTime} mins</h4>
  </div>
);


const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {data.map((res,index)=>(
          <RestaurentCard key={index} resData={res} />)
      )}
    </div>
  </div>
);




const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

// rendering in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
