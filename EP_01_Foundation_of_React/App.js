import React from "react";
import ReactDOM from "react-dom/client";

// Wrap your elements in a single parent element

const elem = <span>This is element</span>;

// composing two components into one called component composition
const HeadingComponent2 = () => (
  <div>
    {/* <Title/> */}
    {title}
    <h1>This is component 2</h1>
  </div>
);
 //react element  //gone to infinite loop
 const title = (
  <h1>
    Sangam {elem} <HeadingComponent2 /> Mundhe
  </h1>
);

const Title = () => <h1>Sangam Mundhe</h1>; //react element

//react functional component
// const HeadingComponent = () => {
//   return <h1>This Is Sangam</h1>;
// };



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
