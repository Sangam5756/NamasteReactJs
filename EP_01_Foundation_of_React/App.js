import React from "react";
import ReactDOM from "react-dom/client";

// Wrap your elements in a single parent element

const Title =()=> <h1>Sangam Mundhe</h1>; //react element

// const HeadingComponent = () => {
//   //react functional component
//   return <h1>This Is Sangam</h1>;
// };


const HeadingComponent2 = () =>(
  <div>
      <Title/>
    <h1>This is component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
