import React from "react";
import ReactDOM from "react-dom/client";

// Wrap your elements in a single parent element

const Title =()=> <h1>Sangam Mundhe</h1>; //react element

//react functional component
// const HeadingComponent = () => {
//   return <h1>This Is Sangam</h1>;
// };



// composing two components into one called component composition
const HeadingComponent2 = () =>(
  <div>
      <Title/>
    <h1>This is component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
