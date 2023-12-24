import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

// simple rendering without attribute without jsx and attribute
root.render(
  React.createElement("h1", null, "welcome to react js training day2")
);

//  simple rendering without attribute without jsx and with attribute attribute
root.render(
  React.createElement(
    "h2",
    { greet: "hello", title: "title1" },
    "welcome to react js training day2 with attribute object"
  )
);

// multiple rendering of react element without jsx
const title1 = React.createElement("h1", null, `title1`);
const title2 = React.createElement("h1", null, `title2`);
const parentElement = React.createElement("div", null, [title1, title2]);
root.render(parentElement);

//simple rendering with jsx
root.render(<h1>welcome to react js training day2 with jsx</h1>);

// multiple element rendering with jsx
root.render(
  <div>
    <h1>Welcome to day2 training in react with jsx </h1>
    <h1>Welcome to day2 training in react with jsx </h1>
  </div>
);

// multiple element rendering with jsx with variable

const name = "david";
const emp = {
  name: "maria",
  age: 24,
};

root.render(
  <div>
    <h1>Welcome to day2 training in react with jsx {name}</h1>
    <h1>Welcome to day2 training in react with jsx </h1>
    <p>sum of 1 + 2 = {1 + 2}</p>
    <p>emp name is {emp.name}</p>
  </div>
);

root.render(
  <div>
    <Header />
    <App />
  </div>
);
