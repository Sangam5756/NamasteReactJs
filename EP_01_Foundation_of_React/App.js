import React from "react";
import ReactDOM from "react-dom/client";

// Wrap your elements in a single parent element

const elem = <span>This is element</span>;


//react element  //gone to infinite loop
const Title =()=> (
  <h1>
    Sangam {elem}Mundhe
  </h1>
);




// composing two components into one called component composition
const HeadingComponent2 = () => (
  <div>
    {Title()}
    <Title/>
    <Title></Title>
    <h1>This is component 2</h1>

  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
