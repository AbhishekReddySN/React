const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "I am a subchild h1 tag"),
      React.createElement("h2", {}, "I am a another sub child"),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am a subchild h1 tag"),
      React.createElement("h2", {}, "I am a another sub child"),
    ])
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
