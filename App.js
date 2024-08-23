const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hiii h1 Broooo"),
    React.createElement("h2", {}, "Hiii h2 Broooo"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hiii h1 Broooo"),
    React.createElement("h2", {}, "Hiii h2 Broooo"),
  ]),
]);

// Because of this complex structure there is something make our life easy
// that is called the jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
