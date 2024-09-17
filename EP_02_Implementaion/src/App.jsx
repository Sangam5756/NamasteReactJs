import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import "./index.css"
import UserContext from "./utils/context/UserContext";


// dynamic loading
// on demand lading
// chunking
// bundling

const Grocery = lazy(() => import("./components/Grocery"));




const AppLayout = () => {

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {

    const data = {
      name: "Sangam Mundhe"
    }

    setUserInfo(data.name)

  }, []);

  return (
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
      <Header />
      <Outlet />

    </div>
    </UserContext.Provider>
  );
}



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      }
      ,
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />
      }
    ]

  }

]);


// rendering in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
